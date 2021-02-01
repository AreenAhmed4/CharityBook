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
    neighborhood: String,
    street: String,
    donateDetails: String,
    availableDate: {type:String},
    availableTime: {type:String},
    deliveryYes: Boolean,
    deliveryNo: Boolean,
    notes: String,

})

module.exports = mongoose.model('ToSendDonate',ToSendDonate)