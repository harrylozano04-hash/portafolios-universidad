const resultado = document.getElementById("resultado");

function agregar(valor){
  resultado.value += valor;
}

function limpiar(){
  resultado.value = "";
}

function calcular(){
  try{
    resultado.value = eval(resultado.value);
  } catch(error){
    resultado.value = "Error";
  }
}

function cambiarSigno(){
  if(resultado.value){
    resultado.value = parseFloat(resultado.value) * -1;
  }
}