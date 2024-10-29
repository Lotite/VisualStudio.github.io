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
        ${imprimirOpciones(pregunta.opciones.sort(() => Math.random() - 0.5 <=0 ? 1 : -1),index)}
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
        </label><br>`
    });
    return text;
}

imprimirPreguntas();



function limpiar(){
    document.querySelectorAll('h3[style*="color: red"],span[style*="color: red"]').forEach((respuesta) => {
        respuesta.style.color = "black";
    });
}



function comprobar(){
    limpiar();
    numCorrectas = 0;
    const respuestas = Array.from(document.querySelectorAll('.pregunta')).map((pregunta) => {
        let elemento = pregunta.querySelector('input[type="radio"]:checked')
        return elemento ? elemento.value : "vacio";
    });
    respuestas.forEach((respuesta, index) => {
        if (respuesta === respuestas_Correctas[index]) {
            numCorrectas++;
        }else{
            let  elemento = document.querySelectorAll(".pregunta")[index]
            if(respuesta!="vacio"){
                elemento.querySelector('input:checked + span').style.color = "red";
            }else{
                elemento.querySelector('h3').style.color = "red";
            }
        }
    });
    document.getElementById("correctas").textContent = `Has acertado ${numCorrectas} preguntas`
    if(respuestas.some(respuesta=> respuesta=="vacio")){
        document.getElementById("error").textContent = "No has respondido todas las preguntas"
    }else{
        document.getElementById("error").textContent = ""
    }
}


document.querySelector("button").addEventListener("click",comprobar)