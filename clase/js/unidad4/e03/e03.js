class Cliente {
    constructor(nombre, localidad, cuota) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.cuota = cuota;
    }
}





let clientes = [new Cliente("Juan", "coruña", 60), new Cliente("maria", "ferrol", 20)]


document.getElementById("bBuscar").addEventListener("click", ()=>{render()})
document.getElementById("bAdd").addEventListener("click",() => {
    let nombre = document.getElementById("inputNombre").value
    let localidad = document.getElementById("inputLocalidad").value
    let cuota = document.getElementById("inputCuota").value
    añadir(nombre,localidad,cuota);
})

function render() {
    let th = document.getElementById("thead");
    let tds = document.getElementById("tbody");
    let opcion = document.getElementById("selectBuscar").value
    let buscar = document.getElementById("inputBuscar").value
    th.innerHTML = ""
    tds.innerHTML = ""
    let filtro = clientes
    switch (opcion) {
        case "0":
            
        th.innerHTML = "<tr><th>Nombre</th><th>Localidad</th><th>Cuota</th></tr>"
        
        if (buscar != "") filtro = clientes.filter((cliente)=> cliente.nombre.toLocaleLowerCase().startsWith(buscar.toLocaleLowerCase()))
       
       filtro.forEach((cliente) => {
           let { nombre,localidad,cuota } = cliente
           tds.innerHTML += `<tr><td>${nombre}</td><td>${localidad}</td><td>${cuota}</td></tr>`
       })
            break;
        case "1":
            th.innerHTML = "<tr><th>Nombre</th><th>Cuota</th></tr>"
            if (buscar != "") filtro = clientes.filter((cliente)=> cliente.localidad.toLocaleLowerCase().startsWith(buscar.toLocaleLowerCase()))
            filtro.forEach((cliente) => {
                let { nombre, cuota } = cliente
                tds.innerHTML += `<tr><td>${nombre}</td><td>${cuota}</td></tr>`
            })
            break;
        case "2":
            th.innerHTML = "<tr><th>Nombre</th><th>Localidad</th><th>Cuota</th></tr>"
            if (buscar != "") filtro = clientes.filter((cliente)=> cliente.cuota > parseInt(buscar))
           
           filtro.forEach((cliente) => {
               let { nombre,localidad,cuota } = cliente
               tds.innerHTML += `<tr><td>${nombre}</td><td>${localidad}</td><td>${cuota}</td></tr>`
           })
            break;
    }

}

function añadir(nombre,localidad,cuota){
    if (nombre != null,localidad != null,cuota != null ){
        clientes.push(new Cliente(nombre,localidad,parseInt(cuota)))
        render()
    }else{
        alert("rellena todos los campos")
    }
}






render()