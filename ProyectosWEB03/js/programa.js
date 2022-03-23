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

$(document).ready(function(){
    $("button").click(function(){
        var valor = $("#numero4D").val();

    var cantidadPares = 0;
    var cantidadImpares = 0;
    var cantidadCeros = 0;
    var i = 0;
    var numero = [4];

    var numero4D =parseInt( document.getElementById('numero4D').value);
    if (numero4D <= 1000){
        alert("El numero no es de 4 digitos, intente de nuevo");
    }else{
         while(numero4D>0){
             numero[i] = numero4D%10;
             numero4D = parseInt(numero4D/10);

             if(numero[i] == 0){
                 cantidadCeros ++;
            }else if(numero[i]%2 == 0){
                cantidadPares ++;            
            }else{
                cantidadImpares ++;
            }
             i++;
         }   
    }

    $("#pares").val(cantidadPares);
    $("#impares").val(cantidadImpares);
    $("#ceros").val(cantidadCeros);

    });
  });
