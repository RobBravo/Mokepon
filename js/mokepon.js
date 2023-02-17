let ataqueJugador

// Inicializacion de parametros de juego
function iniciarJuego(){
   let botonMascotaJugador = document.getElementById('boton-mascota')
   botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

   let botonFuego = document.getElementById('botom-fuego')
   botonFuego.addEventListener('click',ataqueFuego)
   let botonAgua = document.getElementById('botom-agua')
   botonAgua.addEventListener('click',ataqueAgua)
   let botonTierra = document.getElementById('botom-tierra')
   botonTierra.addEventListener('click',ataqueTierra)
}

// Acciones del juegador
function seleccionarMascotaJugador(){
   let inputhipodoge = document.getElementById('hipodoge')
   let inputcapipepo = document.getElementById('capipepo')
   let inputratigueya = document.getElementById('ratigueya')
   spanMascotaJugador=document.getElementById('mascota-jugador')
   if(inputhipodoge.checked){
      spanMascotaJugador.innerHTML='Hipodoge'
   } else if(inputcapipepo.checked){
      spanMascotaJugador.innerHTML='Capipepo'
   }else if(inputratigueya.checked){
      spanMascotaJugador.innerHTML='Ratigueya'
   }else {
      alert('Seleeciona una mascota')
   }

   seleccionarMascotaEnemigo()
}
function aleatorio(min,max){
   return Math.floor(Math.random()*(max-min +1) + min)
}

// Acciones del enemigo
function seleccionarMascotaEnemigo(){
   let ataqueAleatorio = aleatorio(1,3)
   let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
   if (ataqueAleatorio == 1){
      spanMascotaEnemigo.innerHTML= 'Hipodoge'
   }else if (ataqueAleatorio==2){
      spanMascotaEnemigo.innerHTML= 'Capipepo'
   }else {
      spanMascotaEnemigo.innerHTML= 'Ratigueya'
   }
}

// Acciones de ataque
function ataqueFuego(){
   ataqueJugador='Fuego'
   alert(ataqueJugador)
}
function ataqueAgua(){
   ataqueJugador='Agua'
   alert(ataqueJugador)
}
function ataqueTierra(){
   ataqueJugador='Tierra'
   alert(ataqueJugador)
}
//Iniciar Juego
window.addEventListener('load', iniciarJuego)