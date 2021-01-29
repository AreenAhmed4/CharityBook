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


let Charity = require('./model/charitiesInfo');
const charitiesInfo = require('./model/charitiesInfo');


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
    NewCharity.news1 = req.body.News1;
    NewCharity.news2 = req.body.News2;
    NewCharity.news3 = req.body.News3;  
})


app.get('/Charities' , function (req,res){  
    CharitiesInfo.find({},function(error,CharitiesInfo){    
        if (error){
            res.status(500).send({Error:"Coudn't get "})
        } else {
            
            res.send(CharitiesInfo);
        }
    }) 
})




app.post('/UploadActivity1' , function (req,res){
    
    try {
        if(!req.files.file) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let Activity1 = req.files.file;
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads") 
            let newName = Date.now().toString()+Activity1.name.substr(Activity1.name.length - 5)
            
            console.log(newName)
            Activity1.mv('./uploads1/' + newName);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: newName,
                    mimetype: Activity1.mimetype,
                    size: Activity1.size
                }
            });
            console.log('done')
        }
    } catch (err) {
           console.log(err)     

        res.status(500).send(err);
    }
    
})

app.use('/uploads1', express.static(process.cwd() + '/uploads1'))



app.post('/UploadActivity2' , function (req,res){
    
    try {
        if(!req.files.file) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let Activity2 = req.files.file;
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads") 
            let newName = Date.now().toString()+Activity2.name.substr(Activity2.name.length - 5)
            
            console.log(newName)
            Activity2.mv('./uploads2/' + newName);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: newName,
                    mimetype: Activity2.mimetype,
                    size: Activity2.size
                }
            });
            console.log('done')
        }
    } catch (err) {
           console.log(err)     

        res.status(500).send(err);
    }
    
})

app.use('/uploads2', express.static(process.cwd() + '/uploads2'))




app.post('/UploadActivity3' , function (req,res){
    
    try {
        if(!req.files.file) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let Activity3 = req.files.file;
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads") 
            let newName = Date.now().toString()+Activity3.name.substr(Activity3.name.length - 5)
            
            console.log(newName)
            Activity3.mv('./uploads3/' + newName);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: newName,
                    mimetype: Activity3.mimetype,
                    size: Activity3.size
                }
            });
            console.log('done')
        }
    } catch (err) {
           console.log(err)     

        res.status(500).send(err);
    }
    
})

app.use('/uploads3', express.static(process.cwd() + '/uploads3'))




app.listen(4000, function() {
    console.log("Server is running on port 4000")
})