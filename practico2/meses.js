const readlineSync = require('readline-sync');


const meses = {
  1: 'enero',
  2: 'febrero',
  3: 'marzo',
  4: 'abril',
  5: 'mayo',
  6: 'junio',
  7: 'julio',
  8: 'agosto',
  9: 'septiembre',
  10: 'octubre',
  11: 'noviembre',
  12: 'diciembre',
};

const numeroMes = parseInt(readline.question('Ingresa un número del 1 al 12: '));

const mes = meses[numeroMes];


if (mes) {

  const diasPorMes = {
    enero: 31,
    febrero: 28,
    marzo: 31,
    abril: 30,
    mayo: 31,
    junio: 30,
    julio: 31,
    agosto: 31,
    septiembre: 30,
    octubre: 31,
    noviembre: 30,
    diciembre: 31,
  };


  const cantidadDeDias = diasPorMes[mes];

  console.log(`La cantidad de días del mes de ${mes} es ${cantidadDeDias}`);
} else {
  console.log('Número de mes inválido');
}
