const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commandeSchema = new Schema({
    prixtotal :{
      type:Number
    },
    produit: [{ type: Schema.Types.ObjectId, ref: 'produit' }],
    client: [{ type: Schema.Types.ObjectId, ref: 'client' }]

   },
    {
        versionKey: false,
        timestamps: true
    })


module.exports = mongoose.model('commandes',commandeSchema, 'commandes');


