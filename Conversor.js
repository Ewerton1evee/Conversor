function converter(){
 let h2 = document.getElementById("h2");
 let input = document.getElementById("input").value;
 let select = document.getElementById("select").value;
 let valor = 0 ;
 if (select === "dolarreal") {
  valor = input + " dolares equivalem a " + input * 6.11 + " reais";
 } 
 else if(select === "realdolar") {
  valor = input + " reais equivalem a " + input/ 6.11 + " dolares";
 }
 else if (select === "minutohora") {
  valor = input + " minutos equivalem a " + input/ 60 + " horas";
 }
 else if (select === "horaminuto") {
  valor = input + " horas equivalem a " + input * 60 + " minutos";
 }
 else if (select === "milissegundosegundo") {
  valor = input + " milissegundos equivalem a " + input/ 1000  + " segundos";
 }
 else if (select === "segundomilissegundo") {
  valor = input + " segundos equivalem a " + input* 1000  + " milissegundos";
 }
 h2.innerHTML = valor;
};
