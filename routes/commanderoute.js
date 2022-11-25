const express = require('express');
const { listcommande, detailcommande } = require('../controlers/commandecontroller');
const commande = require('../models/commande');
const router= express.Router();


 




router.put('/commande/:idcommandet',commande);
router.get('/commande',listcommande);
router.get('/commande/:idcommande',detailcommande);




module.exports = router;