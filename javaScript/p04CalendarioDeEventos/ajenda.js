const eventos = []
const botonEvento = document.getElementById("BotonEvento");
const titulo = document.getElementById("titulo");
const fecha = document.getElementById("calendario");




botonEvento.addEventListener("click", function(){
    addEvento();
})


function addEvento(){
    if( titulo.value != ""  && fecha.value != "" ){
        eventos.unshift({titulo : titulo.value, fecha : fecha.value, id: Math.random()*100});
        titulo.value = "";
        fecha.value = "";
        imprimir();
    }
}

function imprimir(){
    const ajenda = document.getElementById("ajenda");
    ajenda.innerHTML = "";
    eventos.forEach(evento => {
        ajenda.innerHTML += `<div class="evento"> <p class="cantidad"> ${evento.fecha} <br/> dias</p> <p class="titulo">${evento.titulo}</p> <p class="fecha">${evento.fecha}</p> <button class="eliminar"  onclick="eliminar(${evento.id})"  >Eliminar</button> </div>`;
    })
}

function ID(id){
    return eventos.findIndex();
}

function eliminar(id){
    eventos.splice(eventos.findIndex( (evento) => evento.id === id ), 1);
    imprimir();
}


alert();

function comparadorDias(){
    const a = new Date().getDate;
}