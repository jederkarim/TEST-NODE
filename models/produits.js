const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitsSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantite: {
        type: Number,
        
    },
    prix: {
        type: Number,
    }  
},
    {
        versionKey: false,
        timestamps: true
    })

  

module.exports = mongoose.model('produits', produitsSchema, 'produits');
    