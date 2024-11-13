class Cookie {
    constructor() {
        const cookies = document.cookie.replaceAll(" ", "").split(";");
        cookies.forEach(cookie => {
            const [key, value] = cookie.split("=");
            this[key] = value;
        })
    }
    set(key, value) {
        document.cookie = `${key}=${value}`
        this[key] = value;
    }
}


const cookie = new Cookie();




//Funciones Eventos;
function inicializarEventos() {
    document.querySelector("#enviar").addEventListener("click", (e) => {
        limpiarError();
        cookie.set("intentos", parseInt(cookie.intentos) + 1)
        document.querySelector("#intentos").innerHTML = `Intentos: ${cookie.intentos}`
        let enviar = true;
        const nombre = document.querySelector("#nombre");
        enviar = validarPatron(/[a-zA-z]+\s*[a-zA-Z]*/, nombre.value, nombre, "Error en el campo Nombre") && enviar;
        const apellidos = document.querySelector("#apellidos");
        enviar = validarPatron(/[a-zA-z]+\s*[a-zA-Z]*/, apellidos.value, apellidos, "Error en el campo Apellidos") && enviar
        const edad = document.querySelector("#edad");
        enviar = validarEdad(0, 105, edad.value, edad, "Error en el campo Edad") && enviar;
        const nif = document.querySelector("#nif");
        //[0-9] solo permitira numeros en ese intervalo {8} obliga a repetirlo 8 veces [A-Za-z] permite un caracter alfabetico
        enviar = validarPatron(/[0-9]{8}[A-Za-z]/, nif.value, nif, "Error en el campo NIF") && enviar;
        const email = document.querySelector("#email");
        //[a-zA-Z0-9] solo permitira caracteres alphanumericos @ obliga a añadirla @ [a-zA-Z] solo permitira caracteres alfabeticos .com obliga a añadirlo
        enviar = validarPatron(/[a-zA-Z0-9]+@[a-zA-Z]+.com/, email.value, email, "Error en el campo E-mail") && enviar
        const provincia = document.querySelector("#provincia");
        const expresion = /C|LU|OU|PO/;
        enviar = validarPatron(expresion, provincia.value, provincia, "Error en el campo Provincia") && enviar
        const fecha = document.querySelector("#fecha");
                            //Esta parte valida el formato dd-mm-aaaa                Esta parte valida el formato aaaa-mm-dd
        const patronFecha = /((0[1-9]|[1-2][1-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\d\d|(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[0-2][1-9]|3[01]))/
        enviar = validarPatron(patronFecha, fecha.value, fecha, "Error en el campo Fecha") && enviar
        const telefono = document.querySelector("#telefono");
        enviar = validarPatron(/[0-9]{9}/, telefono.value, telefono, "Error en el campo Teléfono") && enviar
        const hora = document.querySelector("#hora");
        enviar = validarPatron(/([0-1][0-9]|2[0-3]):[0-5][0-9]/, hora.value, hora, "Error en el campo Hora") && enviar

        if (!enviar || confirm("Quieres enviar los datos?")) {
            e.preventDefault();
        }

    })
    document.querySelector("#nombre").addEventListener("blur", function () { blur(this) })
    document.querySelector("#apellidos").addEventListener("blur", (e) => { blur(e.target) })
}
function blur(input) {
    input.value = input.value.toUpperCase();
}

function validarPatron(patron, valor, elemento, mensaje) {
    if (patron.test(valor)) return true
    pintarError(elemento, mensaje)
    return false;
}

function validarEdad(min, max, valor, elemento, mensaje) {
    if (valor !== "" && valor >= min && valor <= max) return true;

    pintarError(elemento, mensaje)
    return false;
}

function pintarError(elemento, mensaje) {
    elemento.focus();
    elemento.classList.add("error")
    document.querySelector("#errores").innerHTML += `<p>${mensaje}</p><br/>`;
}

function limpiarError() {
    document.querySelector("#errores").innerHTML = "";
    document.querySelectorAll(".error").forEach(elemento => elemento.classList.remove("error"))
}


document.addEventListener("DOMContentLoaded", function () {
    inicializarEventos();
    if (cookie.intentos === undefined) {
        cookie.set("intentos", 0);
    }
    document.querySelector("#intentos").innerHTML = `Intentos: ${cookie.intentos}`
})