let respuestas_Correctas = []
let numCorrectas = 0;


let preguntas = [
    {pregunta: "Como me llamo" , respuesta : "lotfi" , opciones: ["lotfi","bayi","lotf","lott"]},
    {pregunta: "Apellido" , respuesta : "bayi" , opciones:  ["lotfi","bayi","lotf","lott"]},
    {pregunta: "Edad" , respuesta : "20" , opciones:  ["20","21","22","22"]},
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
    formulario.innerHTML += `<button onclick="comprobar()">Comprobar</button>`

}


function imprimirOpciones(opciones = [],num){
    let text = ""

    opciones.forEach((opcion,index) => {
        text += `<input type="radio" id="i${(num+1)+""+(index+1)}" name="pregunta${num + 1}" value="${opcion}">`
        text += `<label for="i${num+""+(index+1)}">${"abcd".charAt(index) + ") "}${opcion}</label><br>`
    });
    return text;
}

imprimirPreguntas();



function limpiar(){
    document.querySelectorAll('h3,input + label').forEach((respuesta) => {
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
    alert(respuestas)
    respuestas.forEach((respuesta, index) => {
        if (respuesta === respuestas_Correctas[index]) {
            numCorrectas++;
        }else{
            let  elemento = document.querySelectorAll(".pregunta")[index]
            if(respuesta!="vacio"){
                elemento.querySelector('input[type="radio"]:checked + label').style.color = "red";
            }else{
                elemento.querySelector('h3').style.color = "red";
            }
        }
    });
    alert(`Has acertado ${numCorrectas} preguntas`);
    if(respuestas.some(respuesta=> respuesta=="vacio")){
        alert("No has respondido todas las preguntas");
    }
}


//document.getElementById("comprobar").addEventListener("click",comprobar)