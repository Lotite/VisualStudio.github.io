print = console.log
let input = document.getElementById("input")
let text;
let b = document.getElementById("button")
b.addEventListener("click",(e)=>{ejecutar()})
let codigoposta = document.getElementById("codigoPostal");
let apellidos = document.getElementById("apellidos");
let email = document.getElementById("email");
let server = document.getElementById("servidor");
let telefono = document.getElementById("telefono");


function ejecutar(){
    text = input.value.split(":")
    codigoposta.innerText += text[4];
    apellidos.innerText += text[1]
    email.innerText += text[3]
    server.innerText += text[3].substring(text[3].indexOf("@")+1)
    telefono.innerText += text[2]
}