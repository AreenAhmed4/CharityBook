$(window).on("load",
    function () {

    });

$(document).ready(
    function () {

        $("h1").css("background-color", "red");
        /*$("button").css("background-color", "green");
        $("button").css("color", "white");
        console.log($("h1").css("background-color"));
        console.log($("button").css("background-color"));
        $("button").each(function () {
            console.log($(this).css("backgroung-color"));

            //        $(".Areen").css("color","white");
            $("#Areen").css("color", "white");
        });
        $("h1").addClass("BigTitle");
        $("h1").addClass("RedTitle");

        console.log($("h1").attr("class"));

        $("h1").removeClass("RedTitle");
        console.log($("h1").attr("class"));

        $("h1").hasClass("RedTitle");
        console.log($("h1").attr("class"));


        ///TEXT///

        $("h1").text("Hello");
        $("button").html("<em>Don't click me</em>");

*/
        ///Events Selector///

        /*$("button").on("click", function () {
            alert("a");

        });*/
        $("button").click(function () {
            $("h1").text("Clicked");
        });

        /* $(document).keypress(function(e){
//           $("h1").text(e.key);
            //or to write as full words//
            console.log(e.key);
            $("h1").text($("h1").text()+ e.key);
        });*/

        //        $("h1").mouseover(function(){
        //            $(this).text("");
        //        });
        //        
        //        $("document").mouseover(function(e){
        //            $("h1").text(e.pageX +"-"+ e.pageY); // mouse cordinates //
        //        });

        //hide the button I clicked //

        //        $("button").click(function () {
        //            $(this).hide();
        //        });


        ////Adding Elements////

        $("h1").before("<button id='issabtn'> This is issabtn </button>");
        $("h1").after("<button> Click me please </button><br><br>");

        $("h1").prepend("<button> Click me please </button><br><br>");
        $("h1").append("<button> Click me please </bytton><br><br>");

        $("#issabtn").css("background-color", "#968532");

        //$("input").remove();

        $("input").css("border-color", "red");




        //Animation

        //        $("button").click(function(){
        //          /*  $("h1").hide();
        //            $("h1").show();*/
        //          /*  $("h1").fadeOut();
        //            $("h1").fadeIn();*/
        //            $("h1").fadeToggle();
        //        });

        //          $("button").click(function(){
        //           /* $("h1").slideUp();
        //            $("h1").slideDown();*/
        //            $("h1").slideToggle();
        //        });

       /* $("button").click(function () {
//            $("h1").animate({opacity:.5}).animate({width:"300px"});
            $("h1").animate({opacity:.5});
            $("h1").animate({width:"300px"});

        });*/
        
    /*    
        $("button").click(function () {
            $("h1").slideDown().delay(9000).slideUp();
        });*/

    });


/*$("h1").css("color","red");
$("button").css("color","green");*/
