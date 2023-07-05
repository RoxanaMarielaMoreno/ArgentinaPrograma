const PIEDRA = 'piedra';
const PAPEL = 'papel';
const TIJERAS = 'tijeras';


function obtenerJugadaComputadora() {

  const opcion = Math.floor(Math.random() * 3);

  
  switch (opcion) {
    case 0:
      return 'piedra';
    case 1:
      return 'papel';
    case 2:
      return 'tijeras';
  }
}


function obtenerJugadaUsuario() {
  
  const eleccion = prompt('Elige: piedra, papel o tijeras');


  if (
    eleccion.toLowerCase() === 'piedra' ||
    eleccion.toLowerCase() === 'papel' ||
    eleccion.toLowerCase() === 'tijeras'
  ) {
    return eleccion.toLowerCase();
  } else {
    
    alert('Elección inválida. Inténtalo de nuevo.');
    return obtenerJugadaUsuario();
  }
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (jugadaComputadora === jugadaUsuario) {
    return 'Empate';
  } else if (
    (jugadaComputadora === 'piedra' && jugadaUsuario === 'tijeras') ||
    (jugadaComputadora === 'tijeras' && jugadaUsuario === 'papel') ||
    (jugadaComputadora === 'papel' && jugadaUsuario === 'piedra')
  ) {
    return 'Gana la computadora';
  } else {
    return 'Gana el usuario';
  }
}


function jugarPiedraPapelTijeras() {
  const jugadaComputadora = obtenerJugadaComputadora();
  const jugadaUsuario = obtenerJugadaUsuario();
  const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

  console.log('La computadora eligió: ' + jugadaComputadora);
  console.log('El usuario eligió: ' + jugadaUsuario);
  console.log('El resultado fue: ' + resultado);
}

jugarPiedraPapelTijeras();
