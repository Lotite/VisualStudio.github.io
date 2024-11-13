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
        const nombre = document.querySelector("#nombre");
        validarPatron(/[a-zA-z]+\s*[a-zA-Z]*/,nombre.value,nombre,"Error en el campo Nombre",true)
        const apellidos = document.querySelector("#apellidos");
        validarPatron(/[a-zA-z]+\s*[a-zA-Z]*/,apellidos.value,apellidos,"Error en el campo Apellidos",true)
        const edad = document.querySelector("#edad");
        if(!(edad.value > 0 && edad.value < 105)){
            pistarError("Error en el campo Edad")
        }
    })
    document.querySelector("#nombre").addEventListener("blur",function(){blur(this) })
    document.querySelector("#apellidos").addEventListener("blur", (e)=>{blur(e.target)})
}
function blur(input){
    input.value = input.value.toUpperCase();
}

function validarPatron(patron,valor,input,mensaje,focus = false){
    if(patron.test(valor)) return true
    if(focus) input.focus();
    pistarError(mensaje)
    return false;
}

function pistarError(text){
    document.querySelector("#errores").innerHTML += `<p>${text}</p><br/>`;
}

function limpiarError(){
    document.querySelector("#errores").innerHTML = "";
}


document.addEventListener("DOMContentLoaded", function() {
    inicializarEventos();
})