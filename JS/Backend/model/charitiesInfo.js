const mongoose = require('mongoose');

const objectId = mongoose.Schema.Types.ObjectID 

let schema = mongoose.Schema;

let charitiesInfo = new schema ({
    charityName : String,
    idNumber : Number,
    phoneNumber: Number,
    cEmail: String,
    faceBook : String,
    city: String,
    neighborhood: String,
    street: String,
    buildingNo: Number,
    service1: String,
    service2: String,
    service3: String,
    service4: String,
    service5: String,
    service6: String,
    activity1: String,
    activity2: String,
    activity3: String,
    news1: String,
    news2: String,
    news3: String
})

module.exports = mongoose.model ('CharitiesInfo',charitiesInfo)





