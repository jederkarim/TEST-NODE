const commande = require('../models/commande')

exports.commande = async (req, res) => {
    try {
        await commande.findByIdAndUpdate(req.params.idcommande, { $push: { produit: req.params.idproduit } }, { new: true });
        await commande.findByIdAndUpdate(req.params.idcommande, { $push: { client: req.params.idclient } }, { new: true });
        res.send({ message: 'commande effectuer' });

    } catch (error) {
        res.send('error.message');
    }
}

exports.listcommande = async (req, res) => {
    const listcommande = await commande.find()
    res.send(listcommande)
}

exports.detailcommande = async (req, res) => {
    const detailcommande = await users.findById(req.params.idcommande).populate('commande')
    res.send(detailcommande)
}
