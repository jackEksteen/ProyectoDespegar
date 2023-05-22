//valor de pasajes
const valorLatam = 180000
const valorAeroArg = 150000

//recupero los datos de busqueda del local storage. 
const datosViajeArray = JSON.parse(localStorage.getItem('datosViaje'))
var datosViaje = datosViajeArray[datosViajeArray.length - 1] //selecciono los ultimos datos ingresados.

//MUESTRO LOS DATOS DEL VIAJE DENTRO DEL PANEL del usuario 
let elementoIda = document.querySelector("#fechaIdaRes")
let contenidoIda = document.createTextNode(datosViaje.fechaIda)
elementoIda.appendChild(contenidoIda)

let elementoVuelta = document.querySelector("#fechaVueltaRes")
let contenidoVuelta = document.createTextNode(datosViaje.fechaVuelta)
elementoVuelta.appendChild(contenidoVuelta)

let elementoOrigen = document.querySelector("#lugarOrigenRes")
let contenidoOrigen = document.createTextNode(datosViaje.lugarOrigen)
elementoOrigen.appendChild(contenidoOrigen)

let elementoDestino = document.querySelector("#lugarDestinoRes")
let contenidoDestino = document.createTextNode(datosViaje.lugarDestino)
elementoDestino.appendChild(contenidoDestino)

let elementoBoletos = document.querySelector("#cantidadPasajeRes")
let contenidoBoletos = document.createTextNode(datosViaje.pasajes)
elementoBoletos.appendChild(contenidoBoletos)

//Calculo el precio del viaje en base a la cantidad de boletos

//LATAM
let elementoValorBoletosLat = document.querySelector("#precioBoletosLT")
let boletosIntlat = parseInt(datosViaje.pasajes) //parseo la cantidad de boletos
if (!datosViaje.soloIda) {
    boletosIntLat = boletosIntlat * 2;
    console.log("Es ida y vuelta y se calcula el doble de solo ida");
}
let totalBoletosLat = valorLatam * boletosIntLat
let contenidoValorBoletosLat = document.createTextNode(totalBoletosLat)
elementoValorBoletosLat.appendChild(contenidoValorBoletosLat)

//Aerolineas ARG
let elementoValorBoletosAA = document.querySelector("#precioBoletosAA")
let boletosIntAA = parseInt(datosViaje.pasajes) //parseo la cantidad de boletos
if (!datosViaje.soloIda) {
   boletosIntAA = boletosIntAA * 2;
    console.log("Es ida y vuelta y se calcula el doble de solo ida");
}
let totalBoletosAA = valorAeroArg * boletosIntAA
let contenidoValorBoletosAA = document.createTextNode(totalBoletosAA)
elementoValorBoletosAA.appendChild(contenidoValorBoletosAA)





