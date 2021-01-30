$(document).ready(function(){
    

$("#SentDonate").on("click",function(e){     

    AddItemToDB()
    
});
    
    
});

/* function GetAllItems (){
    let items = []

    axios.get('http://localhost:4000/toDoItem').then (res =>{
        console.log(res)
        items = res.data
        items.map(item => AddItemDiv(item.text, item._id, item.isArchived))
    }).catch(err => {
        console.log(err)
    })
} */

function AddItemToDB()
{

    axios.post('http://localhost:4000/toSendDonate', {
   // AddItemDiv(res.data._id, res.data.firstName, res.data.phoneNumber, res.data.sEmail, res.data.city, res.data.neihborhood, res.data.street, res.data.donateDetails, res.data.availableDate, res.data.availableTime, res.data.deliveryYes, res.data.deliveryNo, res.data.notes)
    
   
  FName = $('#FName').val(),
  LName = $('#LName').val(),
  PhoneNumber =$('#PhoneNumber').val(),
  Email =('#Email').val(),
  City = ('#City').val(),
  Neihborhood = ('#Neihborhood').val(),
  Street =('#Street').val(),
  DonateDetails =('#DonateDetails').val(),
  availableDate =('#Date').val(),
  availableTime =('#Time').val(),
  deliveryYes =('#DeliveryYes').val(),
  deliveryNo =('#DeliveryNo').val(),
  notes =('#Notes').val()
    })
    
    .then((res)=>{

        console.log(res)
     })
    .catch(err =>{
        console.log(err)
    })
}

/* function AddItemDiv()
{
    let div = $("<div class='d-flex bg-dark text-light p-3 rounded m-2 ToDoItem'></div>");
            let textSpan = $("<span class='w-100'></span>");
            let iconDelete = $("<i class='material-icons'>delete</i>");
            let iconDone = $("<i class='material-icons IconDone'>done</i>");
            
            
            iconDelete.click(function(){
                
                axios.delete('http://localhost:4000/toDoItem/'+id)
                .then(res =>{
                    
                    $(this).parent().fadeOut(function(){
                    $(this).remove();                 
                });

            }).catch(err =>{
                console.log(err)
            })
                
            });
            
            
            iconDone.click(function(){
                let pars = {}

                pars = {
                    Text : txt ,
                    IsArchived : true
                }

                axios.put('http://localhost:4000/toDoItem/'+id, pars).then(res => {

                console.log(res)           
                $(this).parent().fadeOut(function(){
                    $(this).find(".IconDone").remove();
                    $("#CompletedDiv").append($(this));
                });      
                
                }).catch(err =>{
                    console.log(err)
                })
                  
            });
            
            textSpan.text(txt);
            $("#AddTask").val("");
         
            div.append(textSpan);
            div.append(iconDone);
            div.append(iconDelete);
            

            //Not always

            if(isArchived)
            {
                div.find(".IconDone").remove();
                $("#CompletedDiv").append(div);
            }else {
           $("#ToDoDiv").append(div);
            }


} */