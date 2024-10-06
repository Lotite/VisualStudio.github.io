class Cliente {
    constructor(nombre, localidad, cuota) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.cuota = cuota;
    }
}

let clientes = [new Cliente("Juan", "coruña", 60), new Cliente("maria", "ferrol", 20)]

//////////////Funciones


function render() {

    //Selecion de los elementos importantes
    let th = document.getElementById("thead");
    let tds = document.getElementById("tbody");
    let opcion = document.getElementById("selectBuscar").value
    let buscar = document.getElementById("inputBuscar").value
    th.innerHTML = ""
    tds.innerHTML = ""
    let filtro = clientes
    switch (opcion) { //esto filtra segun la opciones que seleciones para imprir
        case "0": //Busqueda por nombre
            
        th.innerHTML = "<tr><th>Nombre</th><th>Localidad</th><th>Cuota</th></tr>"
        
        if (buscar != "") filtro = clientes.filter((cliente)=> cliente.nombre.toLocaleLowerCase().startsWith(buscar.toLocaleLowerCase()))
       
       filtro.forEach((cliente) => {
           let { nombre,localidad,cuota } = cliente
           tds.innerHTML += `<tr><td>${nombre}</td><td>${localidad}</td><td>${cuota}</td></tr>`
       })
            break;
        case "1"://Busqueda por localidad
            th.innerHTML = "<tr><th>Nombre</th><th>Cuota</th></tr>"
            if (buscar != "") filtro = clientes.filter((cliente)=> cliente.localidad.toLocaleLowerCase().startsWith(buscar.toLocaleLowerCase()))
            filtro.forEach((cliente) => {
                let { nombre, cuota } = cliente
                tds.innerHTML += `<tr><td>${nombre}</td><td>${cuota}</td></tr>`
            })
            break;
        case "2"://Busqueda por cuota
            th.innerHTML = "<tr><th>Nombre</th><th>Localidad</th><th>Cuota</th></tr>"
            if (buscar != "") filtro = clientes.filter((cliente)=> cliente.cuota > parseInt(buscar))
           
           filtro.forEach((cliente) => {
               let { nombre,localidad,cuota } = cliente
               tds.innerHTML += `<tr><td>${nombre}</td><td>${localidad}</td><td>${cuota}</td></tr>`
           })
            break;
    }

}

//Esta funcion sirve para añadir mas filas a la tabla
function añadir(nombre,localidad,cuota){
    if (nombre != "" && localidad != "" && cuota >0 ){
        clientes.push(new Cliente(nombre,localidad,parseInt(cuota)))
        render()
    }else{
        alert("rellena todos los campos")
    }
}





////Elementos o Botones



document.getElementById("bBuscar").addEventListener("click", ()=>{render()})
document.getElementById("bAdd").addEventListener("click",() => {
    let nombre = document.getElementById("inputNombre").value
    let localidad = document.getElementById("inputLocalidad").value
    let cuota = document.getElementById("inputCuota").value
    añadir(nombre,localidad,cuota);
})





render()