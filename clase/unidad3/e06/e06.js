let input = document.getElementById("input");
let text = "" ;
let b = document.getElementById("button")
b.addEventListener("click",(e)=>{ejecutar()})


//selecionar elemetos del HTMl///////////////////////////
let tamaño = document.getElementById("tamaño");
let mayuscula = document.getElementById("mayusculas");
let miniscula = document.getElementById("minisculas");
let nombre = document.getElementById("nombre");
let apellido1 = document.getElementById("apellido1");
let apellido2 = document.getElementById("apellido2");
let nombre2 = document.getElementById("nombre2");
let nombre3 = document.getElementById("nombre3");
/////////////////////////////////////////////////////




function ejecutar(){
    text = input.value
    let info = text.toLowerCase().split(" ");
    tamaño.innerText += (info[0].length + info[1].length + info[2].length )
    mayuscula.innerText += text.toUpperCase()
    miniscula.innerText += text.toLowerCase()
    nombre.innerText += info[0];
    apellido1.innerText += info[1];
    apellido2.innerText += info[2];
    nombre2.innerText += info[0].charAt(0) + info[1] + info[2].charAt(0);
    nombre3.innerText += info[0].substring(0,3)+info[1].substring(0,3)+info[2].substring(0,3)
}