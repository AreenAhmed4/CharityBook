// const { text } = require('body-parser');
const mongoose = require ('mongoose');

const objectId = mongoose.Schema.Types.ObjectID 

let schema = mongoose.Schema;

let toTakeDonate = new schema
({
    senderId:{ type : objectId , ref:'ToSendDonate'},
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    tEmail: String,
    city: String,
    neighborhood: String,
    street: String,
    availableDate: {type:String},
    availableTime: {type:String},
    notes: String,

})

module.exports = mongoose.model('ToTakeDonate',toTakeDonate)