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
let ToTakeDonate = require('./model/toTakeDonate')
let donates = require('./model/donates')


app.post('/ToSendDonate', function(req,res){

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
  NewDonate.delivery= req.body.Delivery;
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


app.post('/ToTakeDonate', function(req,res){

  let NewDonate= new ToTakeDonate()
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

  let TakenID = req.body.ID
  console.log(req.body);

  NewDonate.save(function(err,TakenDonate){
    if (err){
      console.log(err)
      res.status(500).send({error:"Couldn't Take"})
    } else {

      console.log(TakenID)
      ToSendDonate.deleteOne ({_id:TakenID} , function (error,TokenDonate) {
        if (error) {
            res.status(500).send({error:"Coudn't Delete "})
        } else { res.send(TokenDonate) }
    } )  


  /*   var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'charity.donates@gmail.com',
    pass: 'Charity123'
  }
});

var mailOptions = {
  from: 'charity.donates@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html : '<p><strong>Name:</strong>' +  +'</br></p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
 */
    }
  })

})


app.get('/ToSendDonate', function (req,res){
  ToSendDonate.find({} , function(error,ToSendDonates){
    if (error){
      res.status(500).send({Error: "Couldn't get Donates"})
    } else {
      res.send(ToSendDonates)
    }
  })
})

app.get('/ToTakeDonate', function (req,res){
  ToTakeDonate.find({} , function(error,ToTakeDonates){
    if (error){
      res.status(500).send({Error: "Couldn't get Donates"})
    } else {
      res.send(ToTakeDonates)
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