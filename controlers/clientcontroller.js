const clients = require('../models/clients');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { commande } = require('./commandecontroller');
const { openDelimiter } = require('ejs');

exports.register = async (req, res) => {
    try {
        const verif = await clients.findOne({ email: req.body.email })
        if (verif) {
            res.send('Email exist deja')
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            req.body.password = hash;

            const client = await clients.create(req.body)     
            res.send('Enregistrer avec succes')


        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message || 'error serveur' })
    }
}

exports.login = async (req, res) => {
    const verif = await clients.findOne({ email: req.body.email })
    if (!verif) {
        res.send('Mail introuvable')
    }
    else {
        const verifPassword = await bcrypt.compare(req.body.password, verif.password)
        if (verifPassword) {
            const dataclient = {
                clientEmail: verif.email,
                clientId: verif._id
            }
            const token = jwt.sign(dataclient, process.env.JWT_SECRET,{ expiresIn:'1d'});
            res.status(200).json({token});
        }
        else {
            res.status(200).json('verifier votre Email ou password');
        }
    }
}
exports.updateclient = async (req, res) => {
    try {
        const client = await clients.findByIdAndUpdate(req.params.idclient, req.body);
        const updated = await client.findById(req.params.idclient)
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json('error serveur');
    }
}

exports.deleteclient = async (req, res) => {
    try {
        await clients.findByIdAndRemove(req.params.id, req.body);
        res.status(200).json('client a été supprimer avec success ');
    } catch (error) {

        res.status(500).json('error serveur')
    }
}

exports.affichelistclients = async (req, res) => {
    try {
        const client = await clients.find();
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json('error serveur')
    }
}

exports.afficheclient = async (req, res) => {
    try {
        const client = await clients.findById(req.params.idclient, req.body);
        res.status(200).json(client);
    } catch (error) {

        res.status(500).json('error serveur')
    }
}


exports.commande = async(req,res)=>{
    try {
        await clients.findByIdAndUpdate(req.params.idclient,{$push :{commande: req.params.idcommande}},{new:true});
        res.send({message:'affected'});
        
    } catch (error) {
        res.send('error.message');
    }
}



