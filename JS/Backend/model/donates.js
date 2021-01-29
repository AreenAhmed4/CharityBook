const { text } = require('body-parser');
const mongoose = require ('mongoose');

const objectId = mongoose.Schema.Types.ObjectID 

let schema = mongoose.Schema;

let donates = new schema
({
    donaterId: {type: objectId, ref: 'ToSendDonate'},
    takerId: {type: objectId, ref:'ToTakeDonate'},
    donaterPhoneNumber:{type: Number, ref:'ToSendDonate'},
    TakerPhoneNumber: {type: Number, ref:'ToTakeDonate'},
    donaterMail: {type: String, ref:'ToSendDonate'},
    takerMail: {type: Number, ref:'ToTakeDonate'},
    donateDetails: {type: String, ref:'ToSendDonate'},
    delivery: {type: Boolean, ref:'ToSendDonate'},
    takerNotes: {type: String, ref:'ToTakeDonate'},
    DonaterNotes: {type: String, ref:'ToSendDonate'},
})

module.exports = mongoose.model('Donates',donates)