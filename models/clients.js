const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientsSchema = new Schema({
    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },  
    roleclient: {
        type: String
    }
   },
    {
        versionKey: false,
        timestamps: true
    })


module.exports = mongoose.model('clients', clientsSchema, 'clients');


