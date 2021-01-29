// const { text } = require('body-parser');
const mongoose = require ('mongoose');

const objectId = mongoose.Schema.Types.ObjectID 

let schema = mongoose.Schema;

let toTakeDonate = new schema
({
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    tEmail: String,
    city: String,
    neighborhood: String,
    street: String,
    availableDate: {type:Date, min: Date.now},
    availableTime: {type:Date, min: Date.now},
    notes: String,

})

module.exports = mongoose.model('ToTakeDonate',toTakeDonate)