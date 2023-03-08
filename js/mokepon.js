let ataqueJugador
let ataqueEnemigo
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
   ataqueJugador='FUEGO'
   ataqueAleatorioEnemigo()
}
function ataqueAgua(){
   ataqueJugador='AGUA'
   ataqueAleatorioEnemigo()
}
function ataqueTierra(){
   ataqueJugador='TIERRA'
   ataqueAleatorioEnemigo()
}

//Ataque aleatorio del enemigo 

function ataqueAleatorioEnemigo(){
   let ataqueAleatorio = aleatorio(1,3)
   if (ataqueAleatorio==1){
      ataqueEnemigo='FUEGO'
   }else if(ataqueAleatorio==2){
      ataqueEnemigo='AGUA'
   }else{
      ataqueEnemigo='TIERRA'
   }

   crearMensaje()
}

// Crear mensajes 

function crearMensaje (){
   let sectionMensajes = document.getElementById('mensajes')
   let parrafo = document.createElement('p')
   let resultado 

   if (ataqueJugador==ataqueEnemigo){
      resultado= 'Empate'
   }else if(ataqueJugador=='FUEGO' && ataqueEnemigo=='AGUA'){
      resultado='GANA ENEMIGO'
   }else if(ataqueJugador=='AGUA' && ataqueEnemigo=='FUEGO'){
      resultado='GANA JUGADOR'
   }else if(ataqueJugador=='AGUA' && ataqueEnemigo=='TIERRA'){
      resultado='GANA ENEMIGO'
   }else if(ataqueJugador=='TIERRA' && ataqueEnemigo=='AGUA'){
      resultado='GANA JUGADOR'
   }else if(ataqueJugador=='FUEGO' && ataqueEnemigo=='TIERRA'){
      resultado='GANA ENEMIGO'
   }else if(ataqueJugador=='FUEGO' && ataqueEnemigo=='TIERRA'){
      resultado='GANA JUGADOR'
   }
   parrafo.innerHTML='Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' - Ganaste 🥳'
   sectionMensajes.appendChild(parrafo)
}


// Genera un numero aleatorio en un rango
function aleatorio(min,max){
   return Math.floor(Math.random()*(max-min +1) + min)
}
//Iniciar Juego
window.addEventListener('load', iniciarJuego)