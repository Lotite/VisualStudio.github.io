import { Edificio } from "../edificios.js"
import * as estilo from "./estilo.js"
/**
 * Trabajando con objetos Javascript:
    Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:

    Construido nuevo edificio en calle: Garcia Prieto, nº: 58, CP: 15706.
    Construido nuevo edificio en calle: Camino Caneiro, nº: 29, CP: 32004.
    Construido nuevo edificio en calle: San Clemente, nº: s/n, CP: 15705.
    El código postal del edificio A es: 15706.
    La calle del edificio C es: San Clemente.
    El edificio B está situado en la calle Camino Caneiro número 29.
    Agregamos 2 plantas y 3 puertas por planta al edificio A...

    Agregamos 4 propietarios al edificio A...

    Jose Antonio Lopez es ahora el propietario de la puerta 1 de la planta 1.
    Luisa Martinez es ahora el propietario de la puerta 2 de la planta 1.
    Marta Castellón es ahora el propietario de la puerta 3 de la planta 1.
    Antonio Pereira es ahora el propietario de la puerta 2 de la planta 2.
    Listado de propietarios del edificio calle García Prieto número 58

    Propietario del piso 1 de la planta 1: Jose Antonio Lopez.
    Propietario del piso 2 de la planta 1: Luisa Martinez.
    Propietario del piso 3 de la planta 1: Marta Castellón.
    Propietario del piso 1 de la planta 2:
    Propietario del piso 2 de la planta 2: Antonio Pereira.
    Propietario del piso 3 de la planta 2:
    Agregamos 1 planta más al edificio A...

    Agregamos 1 propietario más al edificio A planta 3, puerta 2...

    Pedro Meijide es ahora el propietario de la puerta 2 de la planta 3.
    Listado de propietarios del edificio calle García Prieto número 58

    Propietario del piso 1 de la planta 1: Jose Antonio Lopez.
    Propietario del piso 2 de la planta 1: Luisa Martinez.
    Propietario del piso 3 de la planta 1: Marta Castellón.
    Propietario del piso 1 de la planta 2:
    Propietario del piso 2 de la planta 2:
    Propietario del piso 1 de la planta 3:
    Propietario del piso 2 de la planta 3: Pedro Meijide.
 */



const edificioA = new Edificio("Garcia Prieto", "58", "15706");
const edificioB = new Edificio("Camino Caneiro", "29", "32004");
const edificioC = new Edificio("San Clemente", "s/n", "15705");

edificioA.agregarPlantasYPuertas(1, 2);
edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);

edificioB.agregarPlantasYPuertas(1, 1);
edificioB.agregarPropietario("Jose Antonio Lopez", 1, 1);


let edificios = [edificioA, edificioB, edificioC]
function render() {
   const padre = document.querySelector("main")
   padre.innerHTML = "";
   const tempDiv = document.createElement("div")
   edificios.forEach((edificio, numEdificio) => {
      let tempEdificio = estilo.crearEdificio(numEdificio, `${edificio.imprimeCalle()} ${edificio.imprimeNumero()} ${edificio.imprimeCodigoPostal()}`)
      tempDiv.innerHTML = tempEdificio
      edificio.plantas.forEach((planta, numPlanta) => {
         let tempPlanta = document.createElement("div").innerHTML = estilo.crearPlanta(numPlanta)
         tempDiv.querySelector(".edificio-contenedor").innerHTML += tempPlanta
         planta.forEach((puerta, numeroPuerta) => {
            tempDiv.querySelectorAll(".plantas-contenedor")[numPlanta].innerHTML += estilo.crearPuerta(numeroPuerta, puerta)
         })
         tempDiv.querySelectorAll(".plantas-contenedor")[numPlanta].innerHTML += estilo.crearAñadirPuerta()
      })
      tempDiv.querySelector(".edificio-contenedor").innerHTML += estilo.crearAñadirPlanta()
      padre.innerHTML += tempDiv.innerHTML

   })
   estilo.render()
   renderEventos()
}

function renderEventos() {
   document.querySelectorAll(".addPlanta").forEach(menu => {
      menu.querySelector(".boton").addEventListener("click", () => {
         let numEdificio = parseInt(menu.closest('.edificios').getAttribute("numero"))
         let numsPlantas = parseInt(menu.querySelector(".inputPlantas").value)
         let numsPuertas = parseInt(menu.querySelector(".inputPuertas").value)
         if (!numsPlantas || !numsPuertas) {
            estilo.notificacion("error", "Por favor, rellena todos los campos")
         } else {
            edificios[numEdificio].agregarPlantasYPuertas(numsPlantas, numsPuertas)
            render()
         }
      })
   })
   document.querySelectorAll(".addPuertas").forEach(menu => {
      menu.querySelector(".boton").addEventListener("click", () => {
         let input = menu.querySelector("input").value
         let numEdificio = parseInt(menu.closest('.edificios').getAttribute("numero"))
         let numPlanta = parseInt(menu.closest('.plantas').getAttribute("numero"))
         edificios[numEdificio].agregarPuerta(numPlanta, input)
         render()
      })
   })

   document.querySelectorAll(".puertas").forEach(puerta => {
      let input = puerta.querySelector("input")
      input.addEventListener("blur", () => {
         let numEdificio = parseInt(puerta.closest('.edificios').getAttribute("numero"))
         let numPlanta = parseInt(puerta.closest('.plantas').getAttribute("numero"))
         let numPuerta = parseInt(puerta.getAttribute("numero"))
         edificios[numEdificio].agregarPropietario(input.value, numPlanta, numPuerta)
         estilo.notificacion("exito", edificios[numEdificio].mensaje)
      })
   })


}



render()

document.getElementById("bCrearEdificio").addEventListener("click", () => {
   const calle = document.getElementById("inputAddCalle").value.trim();
   const numero = document.getElementById("inputAddNumero").value.trim();
   const cp = document.getElementById("inputAddCP").value.trim();
   if (!calle || !numero || !cp) {
      estilo.notificacion("error", "Por favor, rellena todos los campos")
   } else {
      let edificio = new Edificio(calle, numero, cp)
      edificios.push(edificio)
      estilo.notificacion("exito", edificio.mensaje)
      estilo.render()
      render()
   }
});








