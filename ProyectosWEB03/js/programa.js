$(document).ready(function(){

    alert("listo");

    $("#titulo").mouseenter(function(){
        $("#titulo").css("background-color", "black");
        $("#titulo").css("color", "white");
    });

    $("#titulo").mouseleave(function(){
        $("#titulo").css("background-color", "bisque");
        $("#titulo").css("color", "black");
    });
  
  });