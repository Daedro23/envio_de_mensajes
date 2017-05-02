
function contar() { 
         var max = "160"; 
         var cadena = document.getElementById("textArea").value; 
         var longitud = cadena.length; 

             if(longitud <= max) { 
                  document.getElementById("contador").value = max-longitud; 
             } else { 
                  document.getElementById("textArea").value = cadena.substr(0, max); 
             } 
    } 

function valida(e){
    tecla = (document.all) ? e.keyCode : e.which;

    if (tecla==8){
        return true;
    }
        
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
