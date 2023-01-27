function pass(elem){ 
    document.getElementById("operazioni").value += elem;
 }
 
 function calc() { 
 document.getElementById("operazioni").value = eval(document.getElementById("operazioni").value); 
 }
 
 function cancella() { 
  document.getElementById("operazioni").value = ""; 
 }
 