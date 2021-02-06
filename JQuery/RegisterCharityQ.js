$(document).ready(function(){

    $("#REGISTER").on("click", function(){
        AddItemToDB()
    });
});


function AddItemToDB()
{
    items=
    {

        CharityName: $('#CharityName').val(),
        IdNumber: $('#IdNumber').val(),
        PhoneNumber: $('#PhoneNumber').val(),
        Email: $('#Email').val(),
        Facebook: $('#Facebook').val(),
        City: $('#City').val(),
        Neighborhood: $('#Neighborhood').val(),
        Street: $('#Street').val(),
        Building: $('#Building').val(),
        Service1: $('#Service1').val(),
        Service2: $('#Service2').val(),
        Service3: $('#Service3').val(),
        Service4: $('#Service4').val(),
        Service5: $('#Service5').val(),
        Service6: $('#Service6').val(),
        Activity1: $('#Activity1').val(),
        Activity2: $('#Activity2').val(),
        Activity3: $('#Activity3').val(),
        News1: $('#News1').val(),
        News2: $('#News2').val(),
        News3: $('#News3').val()
    }


    axios.post('http://localhost:3000/Charities', items)
    // AddItemDiv(res.data._id, res.data.firstName, res.data.phoneNumber, res.data.sEmail, res.data.city, res.data.neihborhood, res.data.street, res.data.donateDetails, res.data.availableDate, res.data.availableTime, res.data.deliveryYes, res.data.deliveryNo, res.data.notes)
     .then((res)=>{
 
         console.log(res)
      })
     .catch(err =>{
         console.log(err)
     })
 }