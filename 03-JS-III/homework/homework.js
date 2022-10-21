// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var acumulador = 0 
    for (let i = 0; i <= 10; i++){
      acumulador = acumulador + i      
    }
    return acumulador;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var pares = [];
  //var enteros = [0,1,2,3,4];
  index = 0;
  while(index < array.length){
    if(array[index] % 2 === 0){
      pares.push(array[index]);
    } index++;
  }return pares;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var alCuadrado = [];
  index = 0;
  while(index < array.length){
    array[index] = array[index] ** 2;
    alCuadrado.push(array[index]);
    index++;
  } return alCuadrado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  //var enteros = [];
  function sumatoria(a, b){
    return a+b;}
  var suma = array.reduce(sumatoria);
  return suma
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var digitos = num + '';
  return digitos.length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
