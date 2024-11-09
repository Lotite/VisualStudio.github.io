let respuestas_Correctas = []
let numCorrectas = 0;


let preguntas = [
    {pregunta: "¿Cuál es el mamífero más grande del mundo?", respuesta: "Ballena azul", opciones: ["Elefante africano", "Ballena azul", "Oso polar"]},
    {pregunta: "¿Qué animal es conocido por su capacidad de cambiar de color?", respuesta: "Camaleón", opciones: ["Camaleón", "León", "Delfín"]},
    {pregunta: "¿Cuál de estos animales es un ave?", respuesta: "Pingüino", opciones: ["Tiburón", "Pingüino", "Murciélago"]},
    {pregunta: "¿Qué animal es famoso por su larga migración anual?", respuesta: "Mariposa monarca", opciones: ["Tortuga marina", "Mariposa monarca", "Canguro"]}
].sort(() => Math.random() - 0.5);

function imprimirPreguntas(){
    let formulario = document.querySelector("ol")
    preguntas.forEach((pregunta, index) => {
        let elemento = document.createElement('div');
        elemento.classList.add('pregunta');
        elemento.innerHTML = `<h3><li>${pregunta.pregunta}</li></h3>
        ${imprimirOpciones(pregunta.opciones.sort(() => Math.random() - 0.5),index)}
        `;
        formulario.appendChild(elemento);
        respuestas_Correctas.push(pregunta.respuesta);
    })
}

function imprimirOpciones(opciones = [],num){
    let text = ""

    opciones.forEach((opcion,index) => {
        text += `<label> 
        <input type="radio" id="i${(num+1)+""+(index+1)}" name="pregunta${num + 1}" value="${opcion}"> 
        <span>${"abcd".charAt(index) + ") "}${opcion}<span>
        <img >
        </label><br>`
    });
    return text;
}

function limpiar(){
    document.querySelectorAll('*[style*="color: red"],*[style*="color: green"]').forEach((respuesta) => {
        respuesta.style.color = "black";
    });
    document.querySelectorAll("img[src]").forEach((img) => {
        img.removeAttribute("src");
    });
     document.getElementById("error").textContent = ""
}


function comprobar(){
     limpiar();
     numCorrectas = 0;
    document.querySelectorAll(".pregunta").forEach((pregunta,index) => {
        let eleccion = pregunta.querySelector('input[type="radio"]:checked')
        if(!eleccion){
            pregunta.querySelector('h3').style.color = "red";
            document.getElementById("error").textContent = "No has respondido todas las preguntas"
            return
        }
        if(eleccion.value==respuestas_Correctas[index]){
            pregunta.querySelector('input:checked + span').style.color = "green";
            pregunta.querySelector('input:checked + span img').setAttribute("src","done.png")
            numCorrectas++;
        }else{
            pregunta.querySelector('input:checked + span').style.color = "red";
            pregunta.querySelector('input:checked + span img').setAttribute("src","cross.png")
        }
    })
    document.getElementById("correctas").textContent = `Has acertado ${numCorrectas} preguntas`
}

imprimirPreguntas();
document.querySelector("button").addEventListener("click",comprobar)