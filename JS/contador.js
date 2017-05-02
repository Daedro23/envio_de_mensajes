
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

