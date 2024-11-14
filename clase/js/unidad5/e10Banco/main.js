class Cliente {
    constructor(documento, tipo, fecha, contraseña = "") {
        this.documento = documento;
        this.tipo = tipo;
        this.fecha = fecha;
        this.contraseña = contraseña;
    }

    verificarDatos(cliente) {
        return this.documento == cliente.documento && this.tipo == cliente.tipo && this.fecha.toString() == cliente.fecha.toString();
    }

    getContraseña() {
        let contraseña = "";
        document.querySelectorAll(".num").forEach((num, index) => {
            contraseña += /[0-9]/.test(num.innerHTML) ? num.innerHTML : this.contraseña[index];
        });
        return contraseña;
    }


    verificarDatosContraseña() {
        return this.contraseña === this.getContraseña();
    }
}



//Variables globales
let cliente1 = new Cliente("48113807S", "dni", new Date("2003-11-28"), "123456");
let cliente2 = new Cliente("12345678A", "dni", new Date("2003-11-28"), "123456");
let clientes = [cliente1, cliente2];
let clienteSelect;
inicializarElementos();


//Eventos

document.querySelector("#dni").addEventListener("click", () => {
    document.querySelector("#documento").placeholder = "Número de DNI o Tarjeta de residencia"
})

document.querySelector("#pasaport").addEventListener("click", () => {
    document.querySelector("#documento").placeholder = "Número de pasaporte"
}
)
////////////////////////////Boton
document.querySelectorAll("button")[0].addEventListener("click", (e) => {
    e.preventDefault();
    let documento = document.querySelector("#documento").value;
    let tipo = document.querySelector("input[name='tipo']:checked").value;
    let fecha = fechaConversor()
    let cliente = new Cliente(documento, tipo, fecha);
    if (encontrarCliente(cliente)) {
        document.querySelector('#clave').style.display = "flex"
        document.querySelector('form').style.display = "none"
        if (document.querySelector("#recordar").checked) localStorage.setItem("cliente", JSON.stringify(cliente))
    } else {
        alert("El cliente no existe");
    }
});

document.querySelectorAll("button")[1].addEventListener("click", () => {
    if (clienteSelect.verificarDatosContraseña()) {
        alert("Bienvenido");
    } else {
        alert("Contraseña incorrecta");
    }
})


//Funciones
function fechaConversor() {
    let dia = document.querySelector("#dia").value;
    let mes = document.querySelector("#mes").value;
    let año = document.querySelector("#año").value;
    return new Date(`${año}-${mes}-${dia}`);
}

function encontrarCliente(cliente) {
    let cliente1 = clientes.find((c) => c.verificarDatos(cliente));
    clienteSelect = cliente1;
    return cliente1
}


function inicializarElementos() {
    let nums = [0, 1, 2, 3, 4, 5]
    nums.splice(Math.random() * nums.length, 1)
    nums.splice(Math.random() * nums.length, 1)
    nums.splice(Math.random() * nums.length, 1)
    for (let i = 0; i < 6; i++) {
        document.querySelector("#pin").innerHTML += nums.includes(i) ? `<div class="num"></div>` : `<div class="num"><div class="block"></div></div>`
    }
    let nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    nums2.sort(() => Math.random() - 0.5 > 0 ? 1 : -1)
    nums2.forEach((num, index) => {
        document.querySelector("#teclado").innerHTML += `<div class="key ${![1, 5, 6, 10].includes(index + 1) ? "sinBordes" : ""}">${num}</div>`
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


let cliente = JSON.parse(localStorage.getItem("cliente"));
if (cliente) {
    let fecha = new Date(cliente.fecha);
    document.querySelector("#documento").value = cliente.documento
    document.querySelector("#dia").value = fecha.getDate()
    document.querySelector("#mes").value = fecha.getMonth() + 1
    document.querySelector("#año").value = fecha.getFullYear()
}
