const { text } = require('body-parser');
const mongoose = require ('mongoose');

const objectId = mongoose.Schema.Types.ObjectID 

let schema = mongoose.Schema;

let toSendDonate = new schema
({
    donatingId: { type: objectId, ref: 'Donates'},
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    sEmail: String,
    city: String,
    neighborhood: String,
    street: String,
    donateDetails: String,
    availableDate: {type:Date, min: Date.now},
    availableTime: {type:Date, min: Date.now},
    deliveryYes: Boolean,
    deliveryNo: Boolean,
    notes: String,

})

module.exports = mongoose.model('ToSendDonate',toSendDonate)