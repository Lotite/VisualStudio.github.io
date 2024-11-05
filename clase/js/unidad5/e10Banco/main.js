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


    verificarDatosContraseña() {
        let contraseña = getContraseña();
        let contador = 0;
        contraseña.split().forEach((char,index)=>{
            if(char != this.contraseña[index] && char!= "+"){
                return  false;
            }else if(char == this.contraseña[index]){
                contador++;
            }
        })
        if(contador < 3){
            return  false;
        }
        return true;
    }
}
//Variables globales
let cliente1 = new Cliente("48113807S", "dni", new Date("2003-11-28"), "123456");
let cliente2 = new Cliente("12345678Z", "dni", new Date("2003-11-28"));
let clientes = [cliente1, cliente2];
let clienteSelect = new Cliente("", "", new Date());
inicializarElementos();


//Eventos

document.querySelector("#dni").addEventListener("click", () => {
    document.querySelector("#documento").placeholder = "Número de DNI o Tarjeta de residencia"
})

document.querySelector("#pasaport").addEventListener("click", () => {
    document.querySelector("#documento").placeholder = "Número de pasaporte"
}
)
document.querySelectorAll("button")[0].addEventListener("click", (e) => {
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

document.querySelectorAll("button")[1].addEventListener("click", () => {
    if(clienteSelect.verificarDatosContraseña()){
        alert("Bienvenido");
    }else{
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
    let cliente1 =  clientes.find((c) => c.verificarDatos(cliente));
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
   let key = Array.from(document.querySelectorAll(".num")).find((num,index) => num.innerHTML === "");
    if (key) {
        key.innerHTML = caracter;
    }
}

function getContraseña() {
    let contraseña = "";
    document.querySelectorAll(".num").forEach((num) => {
        contraseña += /[0-9]/.test(num.innerHTML) ? num.innerHTML : "*";
    });
    return contraseña;
}

