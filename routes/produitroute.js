const express = require('express');
const { addproduct, updateproduct, deleteproduit, affichelistproduits, afficheporduit } = require('../controlers/produitcontroller');
const router= express.Router();


router.post('/produit',addproduct);
router.put('/produit/:idproduit',updateproduct);
router.delete('/produit/:idproduit',deleteproduit);
router.get('/produit',affichelistproduits);
router.get('/produit/:idproduit',afficheporduit);




module.exports = router;