const readlineSync = require('readline-sync');


const numero = parseInt(readlineSync.question('5 '));


if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
  console.log('Número inválido');
} else {
  
  for (let i = numero; i >= 0; i--) {
    
    if (i === numero) {
      console.log('Cuenta regresiva ' + i);
    } else if (i === 0) {
      console.log('Lanzamiento!');
    } else {
      console.log(i);
    }
  }
}
