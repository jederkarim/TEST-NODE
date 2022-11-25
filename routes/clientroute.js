const express = require('express');
const { login, afficheclient, affichelistclients, updateclient, register, deleteclient } = require('../controlers/clientcontroller');
const router= express.Router();
  

router.post ('/client',register);
router.post('/login',login);
router.get('/client/:idclient' , afficheclient);
router.get('/client' , affichelistclients);
router.put('/client/:idclient' ,updateclient );
router.delete('/client/:idclient' ,deleteclient );



 



module.exports = router;