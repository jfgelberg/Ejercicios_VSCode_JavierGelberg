/*
5. Crear una funcion que, a partir de un array numerico, encuentre cual es el valor maximo dentro de este y lo devuelva.
*/

function randomArray(x) {
    // Creo array vacio
    let arr = [];
    // Agrego tantos elementos como lo indique x
    for(let i = 0; i < x; i++) {
      // Creo un numero random
      const aleatorio = Math.ceil(Math.random() * 100);
      // Pusheo el numero
      // arr[i] = aleatorio;
      arr.push(aleatorio);
    }
    // Retorno el array
    return arr;
  }
  
  function max(arr) {
    // Variable para el maximo
    let maximo = 0;
    // Recorro el array
    for(let valor of arr) {
      // Comparo valor con maximo
      if(valor > maximo) {
        // Reemplazo el maximo
        maximo = valor;
      }
    }
    // Devuelvo el valor mas grande
    return maximo;
  }
  
  // Creo un array de x elementos
  const arr = randomArray(10);