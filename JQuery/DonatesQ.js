$(document).ready(function(){


    
    GetAllDonates()


})



function GetAllDonates (){
    let items = []

    axios.get('http://localhost:4000/ToSendDonate').then (res =>{
        console.log(res)

        res.data.map ( item => {
    let div1 = $("<div class='container' id="+ item._id +"></div>");
    let divrow = $("<div class='row'></div>");
    let divcol1= $("<div class='col-lg-6 col-md-6 col-12'></div>");
    let divcol2 = $("<div class='col-lg-6 col-md-6 col-12'></div>");
    let divbutton = $("<div class='row'></div>");
    let section = $("<section style='margin-top:7%'></section>");
    $("#DONATES").append(section);
    section.append(div1);
    div1.append(divrow);
    div1.append(divbutton);
    divrow.append(divcol1);
    divrow.append(divcol2);
    divcol1.append("<span class='DonateItem'><i class='bx bxs-right-arrow'></i><strong>DonateID:   </strong>" + item._id  +" </span></br>");
    divcol1.append("<span class='DonateItem'><i class='bx bxs-right-arrow'></i><strong>Location:   </strong>" + item.city + "-"+item.neihborhood +"</span></br>");
    divcol1.append("<span class='DonateItem'><i class='bx bxs-right-arrow'></i><strong>Available Time / Date:   </strong>"+ item.availableDate +"/" + item.availableTime + "</span>")
    divcol1.append("<span class='DonateItem'><i class='bx bxs-right-arrow'></i><strong>Delivery Availability:</strong>" + item.delivery + "</span></br>");
    divcol1.append("<span class='DonateItem'><i class='bx bxs-right-arrow'></i><strong>Notes:  </strong>"+ item.notes +"</span></br>");
    divcol2.append("<pre class='DonateItem'><i class='bx bxs-right-arrow'></i><strong>" +item.donateDetails + "</strong></pre><br></br>");
    divbutton.append("<a href='../HTML/TakeDonate.html?ID="+item._id+"' style='width: 50%; float: right; text-align: center;' class='mx-auto pb-4'><button type='button' class='btn btn-info' style='font-size: 150%;'>Take the Donate</button></a>");
})
    
    }).catch(err => {
        console.log(err)
    })
}



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


