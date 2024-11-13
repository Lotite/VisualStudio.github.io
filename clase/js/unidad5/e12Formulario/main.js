function getCookies(){
    const objCookies = {};
    const cookies = document.cookie.replaceAll(" ","").split(";");
    cookies.forEach(cookie=>{
        const [key,value] = cookie.split("=");
        objCookies[key] = value;
    })
    return objCookies;
}

function setCookies(key,value){
    document.cookie = `${key}=${value}`
}

//Funciones Eventos;
function inicializarEventos(){
    document.querySelector("#enviar").addEventListener("click", (e)=>{
        e.preventDefault();
        limpiarError();
        let error = false;
        const nombre = document.querySelector("#nombre");
        validarPatron(/[a-zA-z]+\s*[a-zA-Z]*/,nombre.value,nombre,"Error en el campo Nombre")
        const apellidos = document.querySelector("#apellidos");
        validarPatron(/[a-zA-z]+\s*[a-zA-Z]*/,apellidos.value,apellidos,"Error en el campo Apellidos")
        const edad = document.querySelector("#edad");
        validarEdad(0,105,edad.value,edad,"Error en el campo Edad")
        const nif = document.querySelector("#nif");
        //[0-9] solo permitira numeros en ese intervalo {8} obliga a repetirlo 8 veces [A-Za-z] permite un caracter alfabetico
        validarPatron(/[0-9]{8}[A-Za-z]/,nif.value,nif,"Error en el campo NIF")
        const email = document.querySelector("#email");
        //[a-zA-Z0-9] solo permitira caracteres alphanumericos @ obliga a añadirla @ [a-zA-Z] solo permitira caracteres alfabeticos .com obliga a añadirlo
        validarPatron(/[a-zA-Z0-9]+@[a-zA-Z]+.com/,email.value,email,"Error en el campo E-mail")
//        const provincia = document.querySelector("#provincia");
//        const expresion = /[a-zA-Z]+\s*[a-zA-Z]/;
//        validarPatron(expresion,provincia.value,provincia,"Error en el campo Provincia")

        const telefono = document.querySelector("#telefono");
        validarPatron(/[0-9]{9}/,telefono.value,telefono,"Error en el campo Teléfono")
        const fecha = document.querySelector("#fecha");
        validarPatron(/([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}/,fecha.value,fecha,"Error en el campo Fecha")
        const hora = document.querySelector("#hora");
        validarPatron(/([0-1][0-9]|2[0-3]):[0-5][0-9]/,hora.value,hora,"Error en el campo Hora")
    })
    document.querySelector("#nombre").addEventListener("blur",function(){blur(this) })
    document.querySelector("#apellidos").addEventListener("blur", (e)=>{blur(e.target)})
}
function blur(input){
    input.value = input.value.toUpperCase();
}

function validarPatron(patron,valor,elemento,mensaje){
    if(!patron.test(valor)) pintarError(elemento,mensaje)
}

function validarEdad(min,max,valor,elemento,mensaje){
    if( valor==="" || valor<min || valor>max) pintarError(elemento,mensaje)
}

function pintarError(elemento,mensaje){
     elemento.focus();
     elemento.classList.add("error")
    document.querySelector("#errores").innerHTML += `<p>${mensaje}</p><br/>`;
}

function limpiarError(){
    document.querySelector("#errores").innerHTML = "";
    document.querySelectorAll(".error").forEach(elemento=>elemento.classList.remove("error"))
}


document.addEventListener("DOMContentLoaded", function() {
    inicializarEventos();
})