const eventos = JSON.parse(load()) ; 
imprimir();
const botonEvento = document.getElementById("BotonEvento");
const titulo = document.getElementById("titulo");
const fecha = document.getElementById("calendario");








botonEvento.addEventListener("click", function(){
    addEvento();
})


function addEvento(){
    const f = new Date();

    if((new Date(fecha.value)).getTime() <  (new Date()).getTime()){
        alert("La fecha no se puede introducir");
    }
    else
        if( titulo.value != ""  && fecha.value != ""  ){
            eventos.unshift({titulo : titulo.value, fecha : fecha.value, id: Math.round(Math.random()*10000)/100});
            save(JSON.stringify());
            titulo.value = "";
            fecha.value = "";
            imprimir();
        }









}

function imprimir(){
    console.log(eventos);
    const ajenda = document.getElementById("ajenda");
    ajenda.innerHTML = "";
    if (eventos.length > 0)
    eventos.forEach(evento => {
        ajenda.innerHTML += `
            <div class="evento"> 
                <p class="cantidad"> ${comparadorDias(evento.fecha)} <br/> dias</p> 
                <p class="titulo">${evento.titulo}</p> 
                <p class="fecha">${evento.fecha}</p> 
                <button class="eliminar"  onclick="eliminar(${evento.id})"  >Eliminar</button> 
            </div>
        `;
    })
}

function ID(id){
    return eventos.findIndex();
}

function eliminar(id){
    eventos.splice(eventos.findIndex( (evento) => evento.id === id ), 1);
    save();

    imprimir();
}




function comparadorDias(f){
    const fecha1 = new Date(f);
    const fecha2 = new Date();
    return Math.ceil((fecha1.getTime() - fecha2.getTime()) / (1000 * 3600 * 24));
}

function save(){
    localStorage.setItem("eventos", JSON.stringify(eventos));
}

function load(){
    const datos = localStorage.getItem("eventos");
    return datos ? datos : "[]" ;
}