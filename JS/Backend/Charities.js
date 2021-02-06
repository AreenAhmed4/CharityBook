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

const db = mongoose.connect('mongodb://localhost/Charities',{
    useNewUrlParser: true ,
    useUnifiedTopology: true
}) 


let charitiesInfo = require('./model/charitiesInfo');


app.post('/Charities' , function(req,res){
    
    let NewCharity = new charitiesInfo()

    NewCharity.charityName = req.body.CharityName;
    NewCharity.idNumber = req.body.IdNumber;
    NewCharity.phoneNumber = req.body.PhoneNumber;
    NewCharity.cEmail = req.body.Email;
    NewCharity.faceBook = req.body.Facebook;
    NewCharity.city = req.body.City;
    NewCharity.neighborhood = req.body.Neighborhood;
    NewCharity.street = req.body.Street;
    NewCharity.buildingNo = req.body.Building;
    NewCharity.service1 = req.body.Service1;
    NewCharity.service2 = req.body.Service2;
    NewCharity.service3 = req.body.Service3;
    NewCharity.service4 = req.body.Service4;
    NewCharity.service5 = req.body.Service5;
    NewCharity.service6 = req.body.Service6;
    NewCharity.activity1= req.body.Activity1;
    NewCharity.activity2= req.body.Activity2;
    NewCharity.activity3= req.body.Activity3;
    NewCharity.news1 = req.body.News1;
    NewCharity.news2 = req.body.News2;
    NewCharity.news3 = req.body.News3;  



    NewCharity.save(function(err,AddedCharity){
        if (err){
          console.log(err)
          res.status(500).send({error:"Couldn't add"})
        } else {
          
          res.send(AddedCharity)
        }
      })
    
    })


app.get('/Charities' , function (req,res){  
    charitiesInfo.find({},function(error,Charities){    
        if (error){
            res.status(500).send({Error:"Coudn't get "})
        } else {
            
            res.send(Charities);
        }
    }) 
})






app.listen(3000, function() {
    console.log("Server is running on port 3000")
})