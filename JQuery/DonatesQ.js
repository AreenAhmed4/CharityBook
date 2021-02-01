$(document).ready(function(){


    
    GetAllDonates()


})



function GetAllDonates (){
    let items = []

    axios.get('http://localhost:4000/toSendDonate').then (res =>{
        console.log(res)
        items = res.data
        items.map(item =>AddItemDiv(item._id, item.City, item.Neihborhood, item.Street, item.DonateDetails, item.DDate, item.Time, item.DeliveryYes, item.Notes))
    }).catch(err => {
        console.log(err)
    })
}



function AddItemDiv(id, City, Neihborhood, Street, DonateDetails, DDate, Time, DeliveryYes, Notes)
{
    let div1 = $("<div class='container' id="+ item._id +"></div>");
    let divrow = $("<div class='row'></div>")
    let divcol1= $("<div class='col-lg-6 col-md-6 col-12'></div>")
    let divcol2 = $("<div class='col-lg-6 col-md-6 col-12'></div>")
    let divbutton = $("<div class='row'></div>")
    let section = $("<section style='margin-top:7%'></section>")


    $("#DONATES").append(section);
    $(this).section.append(div1);
    $(this).div1.append(divrow);
    $(this).divrow.append(divcol1).append("<span class='DonateItem'><i class='bx bxs-right-arrow'></i><strong>DonateID:   </strong>" +item.id  +" </span></br>");
    $(this).divrow.append(divcol1).append("<span class='DonateItem'><i class='bx bxs-right-arrow'></i><strong>Location:   </strong>" + item.City + "-"+item.Neihborhood + "-" + item.Street +"</span></br>");
    $(this).divrow.append(divcol1).append("<span class='DonateItem'><i class='bx bxs-right-arrow'></i><strong>Available Time / Date:   </strong>"+ item.DDate +"---" + item.Time + "</span>");
    $(this).divrow.append(divcol1).append("<span class='DonateItem'><i class='bx bxs-right-arrow'></i><strong>Delivery Availability:</strong>" + item.DeliveryYes + "</span></br>");
    $(this).divrow.append(divcol1).append("<span class='DonateItem'><i class='bx bxs-right-arrow'></i><strong>Notes:  </strong>"+ item.Notes +"</span></br>");
    $(this).divrow.append(divcol2).append("<pre class='DonateItem'><i class='bx bxs-right-arrow'></i><strong>" +item.DonateDetails + "</strong></pre><br></br>");
    $(this).div1.append(divbutton).append("<a href='../HTML/TakeDonate.html' style='width: 50%; float: right; text-align: center;' class='mx-auto pb-4'><button type='button' class='btn btn-info' style='font-size: 150%;'>Take the Donate</button></a>");
    

/*             let textSpan = $("<span class='w-100'></span>");
            let iconDelete = $("<i class='material-icons'>delete</i>");
            let iconDone = $("<i class='material-icons IconDone'>done</i>"); */
            
            /* 
            iconDelete.click(function(){
                
                axios.delete('http://localhost:4000/toDoItem/'+id)
                .then(res =>{
                    
                    $(this).parent().fadeOut(function(){
                    $(this).remove();                 
                });

            }).catch(err =>{
                console.log(err)
            })
                
            }); */
            
            
           /*  iconDone.click(function(){
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
            } */


}