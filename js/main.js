$(document).ready(function(){


    var numeros =  $("#numeros");

    var signo =  "";
    
    var process = "";


    $(".numero").click(function(){

        var data =  $(this).text().toString();
        
        process += data;


  
     
        if(process.indexOf("=") > -1){
         
            process = process.replace("=","");
            process = process.replace("X","*");

            var ejecute = (`var tm = ${process}`);

            eval(ejecute);

            numeros.text(tm);
        
        }else if(process.indexOf("ac") > -1){
        
            numeros.text("");
            process = "";
           

        }else if(process.indexOf("m") > -1){
        
            numeros.text("");
            process = "";
           

        }else{
            numeros.append(data);
        }


    });

});