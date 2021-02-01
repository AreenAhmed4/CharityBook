// const { text } = require('body-parser');
const mongoose = require ('mongoose');

const objectId = mongoose.Schema.Types.ObjectID 

let schema = mongoose.Schema;

let toSendDonate = new schema
({
    takerId: { type: objectId, ref: 'ToTakeDonate'},
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    sEmail: String,
    city: String,
    neihborhood: String,
    street: String,
    donateDetails: String,
    availableDate: {type:String},
    availableTime: {type:String},
    delivery: Boolean,
    notes: String,

})

module.exports = mongoose.model('ToSendDonate',toSendDonate)