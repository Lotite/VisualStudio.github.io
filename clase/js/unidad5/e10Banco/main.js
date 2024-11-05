class Cliente {
    constructor(documento, tipo, fecha, contraseña = "") {
        this.documento = documento;
        this.tipo = tipo;
        this.fecha = fecha;
        this.contraseña = contraseña;
    }

    verificarDatos(cliente) {
        if (this.documento === cliente.documento && this.tipo === cliente.tipo && this.fecha.toString() === cliente.fecha.toString()) {
            return true;
        }
        return false;
    }


    verificarDatosContraseña(contraseña) {
        if (this.contraseña === contraseña) {
            return true;
        }
        return false;
    }
}
//Variables globales
let cliente1 = new Cliente("48113807S", "dni", new Date("2003-11-28"), "holaMundo");
let cliente2 = new Cliente("12345678Z", "dni", new Date("2003-11-28"));

let clientes = [cliente1, cliente2];

inicializarElementos();


//Eventos

document.querySelector("#dni").addEventListener("click", () => {
    document.querySelector("#documento").placeholder = "Número de DNI o Tarjeta de residencia"
})

document.querySelector("#pasaport").addEventListener("click", () => {
    document.querySelector("#documento").placeholder = "Número de pasaporte"
}
)
document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    let documento = document.querySelector("#documento").value;
    let tipo = document.querySelector("input[name='tipo']:checked").value;
    let fecha = fechaConversor()
    let cliente = new Cliente(documento, tipo, fecha);
    if (encontrarCliente(cliente)) {
        document.querySelector('#clave').style.display = "flex"
        document.querySelector('form').style.display = "none"
    } else {
        alert("El cliente no existe");
    }
});


//Funciones
function fechaConversor() {
    let dia = document.querySelector("#dia").value;
    let mes = document.querySelector("#mes").value;
    let año = document.querySelector("#año").value;
    return new Date(`${año}-${mes}-${dia}`);
}
function encontrarCliente(cliente) {
    return clientes.find((c) => c.verificarDatos(cliente));
}


function inicializarElementos() {
    let nums = [0, 1, 2, 3, 4, 5]
    nums.splice(Math.random() * nums.length, 1)
    nums.splice(Math.random() * nums.length, 1)
    nums.splice(Math.random() * nums.length, 1)
    for (let i = 0; i < 6; i++) {
        document.querySelector("#pin").innerHTML += nums.includes(i) ? `<div class="num"></div>` : `<div class="num"><div class="block"></div></div>`
    }
    let nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5 ? 1 : -1)
    nums2.forEach((num, index) => {
        document.querySelector("#teclado").innerHTML += `<div class="key ${![1, 5, 6, 10].includes(num + 1) ? "sinBordes" : ""}">${num}</div>`
    })
    document.querySelectorAll(".key").forEach((key) => {
        key.addEventListener("click", () => {
            escribir(key.innerHTML)
        })
    })
}


function escribir(caracter) {
    let key = Array.from(document.querySelectorAll(".num")).find((num) => num.innerHTML === "");
    if (key) {
        key.innerHTML = caracter;
    }
}

