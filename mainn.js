document.getElementById("Grocery").value="";

document.getElementById("Gas").value="";



document.getElementById("emi").value="";
document.getElementById("Other").value="";
document.getElementById("income1").value="";

document.getElementById("income2").value="";

document.getElementById("income3").value="";

document.getElementById("income4").value="";


function Calculate(){


  var reuslt=

Number(document.getElementById("income1").value)+

 Number(document.getElementById("income2").value)+

  Number(document.getElementById("income3").value)+

Number(document.getElementById("income4").value);

    
var expense=
Number (document.getElementById("Grocery").value)+
 Number(document.getElementById("Gas").value)+

 Number(document.getElementById("emi").value)+

 Number(document.getElementById("Other").value);



var actual=reuslt-expense;

document.getElementById("answer1").innerHTML=actual;




var thisyear=actual*12;
document.getElementById("year").innerHTML=thisyear;



var afteryear=actual*60;
document.getElementById("5year").innerHTML=afteryear;






}

function About()
{
    window.location="About.html";
}

function navigatecalc(){
  window.location="Calculator.html";
}



