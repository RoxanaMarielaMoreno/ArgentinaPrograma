const personas = ['Jose', 'Maria', 'Juan', 'Andres', 'Lionel', 'Sofia', 'Leandro', 'Emilia'];

const admitidos = [];
const rechazados = [];

for (let i = 0; i < personas.length; i++) {
  const nombre = personas[i];

  if (nombre === 'Jose' || nombre === 'Sofia') {
    rechazados.push(nombre);
  } else {
    admitidos.push(nombre);
  }
}

console.log('La lista de invitados admitidos es:');
for (let i = 0; i < admitidos.length; i++) {
  console.log(admitidos[i]);
}

console.log('La lista de invitados rechazados es:');
for (let i = 0; i < rechazados.length; i++) {
  console.log(rechazados[i]);
}
