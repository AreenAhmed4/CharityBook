$(document).ready(function(){


    
    GetAllDonates()


})



function GetAllDonates (){
    let items = []

    axios.get('http://localhost:4000/toSendDonate').then (res =>{
        console.log(res)
        items = res.data
        items.map(item =>AddItemDiv(item._id, item.firstName, item.phoneNumber, item.sEmail, item.city, item.neihborhood, item.street, item.donateDetails, item.availableDate, item.availableTime, item.deliveryYes, item.deliveryNo, item.notes))
    }).catch(err => {
        console.log(err)
    })
}



function AddItemDiv(id, firstName, phoneNumber, sEmail, city, neihborhood, street, donateDetails, availableDate, availableTime, deliveryYes, deliveryNo, notes)
{
    let div1 = $("<div class='container' id='Donate1'>");
    let divrow = $("<div class='row'>")
    let divcol1= $("<div class='col-lg-6 col-md-6 col-12'>")
    let divcol2 = $("<div class='col-lg-6 col-md-6 col-12'>")
    let divbutton = $("<div class='row'>")
/*             let textSpan = $("<span class='w-100'></span>");
            let iconDelete = $("<i class='material-icons'>delete</i>");
            let iconDone = $("<i class='material-icons IconDone'>done</i>"); */
            
            
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


}