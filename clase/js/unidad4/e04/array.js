import { Disco } from "./disco.js";
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
    let imprimir = []
    //filtrar por posicion o nombre del disco 
    if (buscador == "") {
        imprimir = filtro
    } else {
        let num = parseInt(buscador);
        if (num >= 1) {
            imprimir.push(filtro[num - 1])
        }
        else {
            imprimir = filtro.filter(disco => disco.nombre.toLocaleLowerCase().startsWith(buscador.toLocaleLowerCase()))
        }
    }
    //Imprime el numero total de discos
    document.getElementById("h3Discos").innerText = `Total discos: ${discos.length}`
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
    let nombre = document.getElementById("addNombre").value
    let grupo = document.getElementById("addGrupo").value
    let tipo = document.getElementById("addTipo").value
    let año = parseInt(document.getElementById("addAño").value)
    let localizacion = document.getElementById("addLocalizacion").value
    let caratula = document.getElementById("addCaratula").value
    let prestado = document.getElementById("addPrestado").value
    let opcion = document.getElementById("addOpcion").value
    if (nombre != "" && grupo != "") {
        let newDisco = new Disco(nombre, grupo, año, tipo, localizacion === ""? 0: parseInt(localizacion), prestado == "1", caratula ==="" ? "imagen.png" : caratula)
        switch (opcion) {
            case "1":
                discos.unshift(newDisco)
                break;
            case "2":
                discos.push(newDisco)
                break;
        }
    }
    render()
})







document.getElementById("bEliminarP").addEventListener("click", () => {
    let disco = discos.shift();
    alert("Se a eliminado " + disco.getInfoString())
    render()
})

document.getElementById("bEliminarF").addEventListener("click", () => {
    let disco = discos.pop();
    alert("Se a eliminado " + disco.getInfoString())
    render()
})






document.getElementById("bOrdenar").addEventListener("click", () => {

    let opcion = document.getElementById("opcionOr").value
    switch (opcion) {
        case "1":
            discos.reverse()
            break;
        case "2":
            discos.sort((dis1, dis2) => { return dis1.nombre < dis2.nombre ? -1 : 1 })
            break;
        case "3":
            discos.sort(() => { return 0.5 - Math.random() });
            break;
    }
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