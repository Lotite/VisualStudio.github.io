import { Disco } from "./disco.js";
import * as lista from "./array.js"
//datos de prueba
let disco1 = new Disco("disco1", "grupo1", 2020, "indie", 1, false, "foto.png");
let disco2 = new Disco("disco2", "grupo1", 2024, "indie", 1, false, "foto.png");
//variables globales
let discos = [disco1, disco2]
let possX, possY;
let moverse = false



////////////funciones

function render() {
    let viewInfo = document.getElementById("imprimirInfo");
    let buscador = document.getElementById("inputSearch").value
    let min = parseInt(document.getElementById("minAño").value);
    let max = parseInt(document.getElementById("maxAño").value);
    let filtro = []
    //Filtra las fechas primero ,si estan vacias no lo hace
    if (min >= 1900 && max >= 1900 && min <= max) {
        filtro = discos.filter(disco => disco.año >= min && disco.año <= max)
    } else {
        filtro = discos
    }
    viewInfo.innerText = "";
    let resultado = new Set(filtro.map(disco => disco.nombre))//crea un set con los nombres 
     resultado = lista.render(Array.from(resultado),buscador);//aqui lo envia como un array para pasar ek filtro del buscador
    let imprimir = filtro.filter(disco =>  resultado.includes(disco.nombre))//aqui crea un array con los nombre que pasaron el filtro
    //Imprime el numero total de discos
    document.getElementById("h3Discos").innerText = lista.mostrarNumero(imprimir,"Total discos:")
    //Imprime los datos del disco en una tabla
    imprimir.forEach((disco) => {
        let txt = `<tr>`;
        disco.getInfoArray().forEach((info) => {
            txt += `<td>${info}</td>`;
        })
        txt += `</tr>`;
        viewInfo.innerHTML += txt
    })
}



/////////////////Elemtos y botones

//Actualiza cuando se escribe
document.getElementById("inputSearch").addEventListener("input", () => { render() })
document.getElementById("minAño").addEventListener("input", () => { render(); });
document.getElementById("maxAño").addEventListener("input", () => { render() })



document.getElementById("bAdd").addEventListener("click", () => {
    //Obtener valores
    let nombre = document.getElementById("addNombre").value
    nombre = lista.primeraLetramayuscula(nombre)
    let grupo = document.getElementById("addGrupo").value
    grupo = lista.primeraLetramayuscula(grupo)
    let tipo = document.getElementById("addTipo").value
    let año = parseInt(document.getElementById("addAño").value)
    let localizacion = document.getElementById("addLocalizacion").value
    let caratula = document.getElementById("addCaratula").value
    let prestado = document.getElementById("addPrestado").value
    let opcion = document.getElementById("addOpcion").value

    if (nombre != "" && grupo != "") {
        //insetar valores
        let newDisco = new Disco(nombre, grupo, año, tipo, localizacion === ""? 0: parseInt(localizacion), prestado == "1", caratula ==="" ? "imagen.png" : caratula)
        discos = lista.añadirValor(discos,opcion,newDisco)
    }
    render()
})







document.getElementById("bEliminarP").addEventListener("click", () => {
    discos = lista.eliminar(discos,1)
    render()
})

document.getElementById("bEliminarF").addEventListener("click", () => {
    discos = lista.eliminar(discos,2)
    render()
})






document.getElementById("bOrdenar").addEventListener("click", () => {
    let opcion = document.getElementById("opcionOr").value
    discos = lista.Ordenar(discos,opcion)
    render()

})
/////////////////Bonus de la tarea
document.getElementById("bLupa").addEventListener("click", () => {
    document.getElementById("inputSearch").focus()
})

////////////// Mover el menu
document.getElementById("barraNavegacion").addEventListener("mousedown", (mouse) => {
    if (mouse.button == 0 && !moverse) {
        moverse = true
        possX = menu.getBoundingClientRect().x - mouse.clientX
        possY = menu.getBoundingClientRect().y - mouse.clientY
    }

})

document.addEventListener("mouseup", () => {
    moverse = false
})

document.body.addEventListener("mousemove", (mouse) => {
    if (moverse) {
        let menu = document.getElementById("menu");
        menu.style.left = `${mouse.clientX + possX}px`;
        menu.style.top = `${mouse.clientY + possY}px`;

    }

})

//Ocultar el menu
document.getElementById("cross").addEventListener("click", () => {
    document.getElementById("menu").style.display = "none"
})

//mostrar el menu
document.getElementById("mostrarMenu").addEventListener("click", () => {
    document.getElementById("menu").style.display = "block"
})












//cargar datos iniciales
render();