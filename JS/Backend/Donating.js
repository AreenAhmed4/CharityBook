const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const fileUpload = require('express-fileupload');

app.use(fileUpload({
    createParentPath: true
}));

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

let ToSendDonate = require('./model/toSendDonate')
let toTakeDonate = require('./model/toTakeDonate')
let donates = require('./model/donates')


app.post('/toSendDonate', function(req,res){

  let NewDonate= new ToSendDonate()
  
  NewDonate.firstName = req.body.FName;
  NewDonate.lastName = req.body.LName;
  NewDonate.phoneNumber = req.body.PhoneNumber;
  NewDonate.sEmail = req.body.Email;
  NewDonate.city = req.body.City;
  NewDonate.neihborhood = req.body.Neihborhood;
  NewDonate.street = req.body.Street;
  NewDonate.donateDetails = req.body.DonateDetails;
  NewDonate.availableDate = req.body.DDate;
  NewDonate.availableTime = req.body.Time;
  NewDonate.deliveryYes = req.body.DeliveryYes;
  NewDonate.deliveryNo = req.body.DeliveryNo;
  NewDonate.notes = req.body.Notes;

  NewDonate.takerId = req.body.TakerID;
  

  NewDonate.save(function(err,AddedDonate){
    if (err){
      console.log(err)
      res.status(500).send({error:"Couldn't add"})
    } else {
      
      res.send(AddedDonate)
    }
  })

})


app.post('/toTakeDonate', function(req,res){

  let NewDonate= new toTakeDonate()
  NewDonate.firstName = req.body.FName;
  NewDonate.lastName = req.body.LName;
  NewDonate.phoneNumber = req.body.PhoneNumber;
  NewDonate.tEmail = req.body.Email;
  NewDonate.city = req.body.City;
  NewDonate.neihborhood = req.body.Neihborhood;
  NewDonate.street = req.body.Street;
  NewDonate.availableDate = req.body.DDate;
  NewDonate.availableTime = req.body.Time;
  NewDonate.notes = req.body.Notes;

  NewDonate.save(function(err,TakenDonate){
    if (err){
      console.log(err)
      res.status(500).send({error:"Couldn't Take"})
    } else {

      /* toSendDonate.deleteOne ({_id:  TakenDonate.takerId} , function (err,TokenDonate) {
        if (err) {
            res.status(500).send({error:"Coudn't Delete "})
        } else { res.send(TokenDonate) }
    } )  */

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

app.get('/toTakeDonate', function (req,res){
  toTakeDonate.find({} , function(error,toTakeDonate){
    if (error){
      res.status(500).send({Error: "Couldn't get Donates"})
    } else {
      res.send(toTakeDonate)
    }
  })
})

app.put('/doneDonates', function(req,res){

  let DoneDonate= new donates()
  DoneDonate.firstName = req.body.FName;
  DoneDonate.lastName = req.body.LName;
  DoneDonate.phoneNumber = req.body.PhoneNumber;
  DoneDonate.sEmail = req.body.Email;
  DoneDonate.city = req.body.City;
  DoneDonate.neihborhood = req.body.Neihborhood;
  DoneDonate.street = req.body.Street;
  DoneDonate.donateDetails = req.body.DonateDetails;
  DoneDonate.availableDate = req.body.DDate;
  DoneDonate.availableTime = req.body.Time;
  DoneDonate.deliveryYes = req.body.DeliveryYes;
  DoneDonate.deliveryNo = req.body.DeliveryNo;
  DoneDonate.notes = req.body.Notes;


  DoneDonate.save(function(err,Finished){
    if (err) {
        res.status(500).send({error:"Coudn't Finish "})
    } else {
        res.send(Finished)
    }
})

})



app.listen(4000, function() {
    console.log("Server is running on port 4000")
})