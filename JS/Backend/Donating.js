const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",  "*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods","*"
  );
  next();
});

const db = mongoose.connect('mongodb://localhost/SendDonate',{
    useNewUrlParser: true ,
    useUnifiedTopology: true
}) 

let toSendDonate = require('./model/toSendDonate')
let ToTakeDonate = require('./model/toTakeDonate')
let donates = require('./model/donates')


app.post('/toSendDonate', function(req,res){

  let NewDonate= new toSendDonate()
  NewDonate.firstName = req.body.FName;
  NewDonate.lastName = req.body.LName;
  NewDonate.phoneNumber = req.body.PhoneNumber;
  NewDonate.sEmail = req.body.Email;
  NewDonate.city = req.body.City;
  NewDonate.neihborhood = req.body.Neihborhood;
  NewDonate.street = req.body.Street;
  NewDonate.donateDetails = req.body.DonateDetails;
  NewDonate.availableDate = req.body.Date;
  NewDonate.availableTime = req.body.Time;
  NewDonate.deliveryYes = req.body.DeliveryYes;
  NewDonate.deliveryNo = req.body.DeliveryNo;
  NewDonate.notes = req.body.Notes;
  
  NewDonate.donatingId = req.body.DonationID;


  NewDonate.save(function(err,AddedDonate){
    if (err){
      alert("Can't add this donation, PLEASE try again later")
      res.status(500).send({error:"Couldn't add"})
    } else {
      res.send(AddedDonate)
    }
  })

})


app.post('/toTakeDonate', function(req,res){

  let NewDonate= new toSendDonate()
  NewDonate.firstName = req.body.FName;
  NewDonate.lastName = req.body.LName;
  NewDonate.phoneNumber = req.body.PhoneNumber;
  NewDonate.tEmail = req.body.Email;
  NewDonate.city = req.body.City;
  NewDonate.neihborhood = req.body.Neihborhood;
  NewDonate.street = req.body.Street;
  NewDonate.availableDate = req.body.Date;
  NewDonate.availableTime = req.body.Time;
  NewDonate.notes = req.body.Notes;

  NewDonate.donatingId = req.body.DonationID;
  NewDonate.donaterMail= req.body.sEmail;

  NewDonate.save(function(err,TakenDonate){
    if (err){
      alert("Can't take this donation, PLEASE try again later")
      res.status(500).send({error:"Couldn't take"})
    } else {
      res.send(TakenDonate)
    }
  })

})


app.get('/toSendDonate', function (req,res){
  ToSendDonate.find({} , function(error,ToSendDonate){
    if (error){
      res.status(500).send({Error: "Couldn't get Donates"})
    } else {
      res.send(ToSendDonate)
    }
  })
})


app.listen(4000, function() {
    console.log("Server is running on port 4000")
})