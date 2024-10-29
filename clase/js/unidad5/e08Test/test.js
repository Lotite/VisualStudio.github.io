let respuestas_Correctas = ["b","a","b","b"]
let numCorrectas = 0;


let preguntas = [
    {pregunta: "selecione,la A" , respuesta : "a" , opciones: ["a","b","c","d"] },
    {pregunta: "selecione,la A" , respuesta : "a" , opciones: ["a","b","c","d"] },
    {pregunta: "selecione,la A" , respuesta : "a" , opciones: ["a","b","c","d"] },
].sort(() => Math.random() - 0.5);


function imprimirPreguntas(){
    let formulario = document.querySelector("ol")
    preguntas.forEach((pregunta, index) => {
        let elemento = document.createElement('div');
        elemento.classList.add('pregunta');
        elemento.innerHTML = `
        <p>${pregunta.pregunta}</p>
        <ol>
        
        </ol>`
    })
}

function imprimirOpciones(opciones = [],num){
    let text = ""
    opciones.forEach((opcion,index) => {
        text += `<input type="radio" name="pregunta${index + 1}" value="${opcion}">`
        text += `<label for="q2b">b) León</label><br>`
    });
}



function limpiar(){
    document.querySelectorAll('p,input + label').forEach((respuesta) => {
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
                elemento.querySelector('p').style.color = "red";
            }
        }
    });
    alert(`Has acertado ${numCorrectas} preguntas`);
    if(respuestas.some(respuesta=> respuesta=="vacio")){
        alert("No has respondido todas las preguntas");
    }
}


document.getElementById("comprobar").addEventListener("click",comprobar)