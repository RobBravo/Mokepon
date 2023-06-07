let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

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

   combate()
}

// Combate

function combate (){
   

   if (ataqueJugador==ataqueEnemigo){
      crearMensaje('¡Empate!')
   }else if(ataqueJugador=='FUEGO' && ataqueEnemigo=='AGUA'){
      crearMensaje('¡GANA ENEMIGO!')
   }else if(ataqueJugador=='AGUA' && ataqueEnemigo=='FUEGO'){
      crearMensaje('¡GANA JUGADOR!')
   }else if(ataqueJugador=='AGUA' && ataqueEnemigo=='TIERRA'){
      crearMensaje('¡GANA ENEMIGO!')
   }else if(ataqueJugador=='TIERRA' && ataqueEnemigo=='AGUA'){
      crearMensaje(resultado='¡GANA JUGADOR!')
   }else if(ataqueJugador=='FUEGO' && ataqueEnemigo=='TIERRA'){
      crearMensaje('¡GANA ENEMIGO!')
   }else if(ataqueJugador=='FUEGO' && ataqueEnemigo=='TIERRA'){
      crearMensaje('¡GANA JUGADOR!')     
   }else if(ataqueJugador=='TIERRA' && ataqueEnemigo=='FUEGO'){
      crearMensaje('¡GANA ENEMIGO!')
   }

}

function revisarVidas(){
   if (vidasEnemigo<0 || vidasJugador<0) {
       //reiniciar
   }

   if(vidasEnemigo==0){
      crearMensajeFinal("FELICITACIONES! Ganaste :)")
   }else if(vidasJugador==0){
      crearMensajeFinal('Lo siento, perdiste :(')
   }

}

 function crearMensaje (resultado){
   let spanVidasJugador = document.getElementById('vida-jugador')
   let spanVidasEnemigo = document.getElementById('vida-enemigo') 
   let sectionMensajes = document.getElementById('mensajes')
   let parrafo = document.createElement('p')
   parrafo.innerHTML='Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' ' + resultado + ' 🥳'
   sectionMensajes.appendChild(parrafo)
   if(resultado == '¡Empate!'){
      vidasEnemigos=vidasEnemigos-0
      vidasJugador=vidasJugador-0
      revisarVidas()
   } else if (resultado == '¡GANA JUGADOR!'){
      
      vidasEnemigos=vidasEnemigos-1
      spanVidasEnemigo.innerHTML = vidasEnemigos
      revisarVidas() 
   } else {
      vidasJugador=vidasJugador-1
      spanVidasJugador.innerHTML = vidasJugador
      revisarVidas()
   }
 }

 function crearMensajeFinal(resultadoFinal){
   let sectionMensajes=document.getElementById('mensajes')
   let parrafo=document.createElement('p')
   parrafo.innerHTML=resultadoFinal
   sectionMensajes.appendChild(parrafo)
}

// Genera un numero aleatorio en un rango
function aleatorio(min,max){
   return Math.floor(Math.random()*(max-min +1) + min)
}
//Iniciar Juego
window.addEventListener('load', iniciarJuego)