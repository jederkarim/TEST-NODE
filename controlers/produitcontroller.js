const produits = require('../models/produits');



exports.addproduct = async (req, res) => {
    try {
        const produit = await produits.create(req.body);
        res.status(201).json(produit);
    } catch (error) {
        res.status(500).json('error serveur')
    }
}
exports.updateproduct = async (req, res) => {
    try {
        await produits.findByIdAndUpdate(req.params.idproduit, req.body);
        const updated = await produits.findById(req.params.idproduit)
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json('error serveur');
    }
}

exports.deleteproduit = async (req, res) => {
    try {
        const produit = await produits.findByIdAndRemove(req.params.idproduit, req.body);
        res.status(200).json('produit a été supprimer avec success ');
    } catch (error) {

        res.status(500).json('error serveur')
    }
}

exports.affichelistproduits = async (req, res) => {
    try {
        const produit = await produits.find();
        res.status(200).json(produit);
    } catch (error) {
        res.status(500).json('error serveur')
    }
}

exports.afficheporduit = async (req, res) => {
    try {
        const produit = await produits.findById(req.params.idproduit, req.body);
        res.status(200).json(produit);
    } catch (error) {

        res.status(500).json('error serveur')
    }
}