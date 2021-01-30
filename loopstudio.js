

$(document).ready(function(){
    $(".hamburger").click(function(){
        $("#navbar").css("background-color", "black");
        $(".hamburger").hide("2");
        $(".close").show("slow");

      $("#navitems").slideToggle("slow");
    });

    $(".close").click(function(){
        $(".close").hide("fast");
        $(".hamburger").show("fast");
        $("#navitems").slideToggle("fast");
        $("#navbar").css("background-color", "transparent");
    } );
  });