const tasks = []
tasks.push({titulo: "hola",realizado:false,id:100})
 let time = 2000;
 let timer = null;
 let ejecutado = null;
function agregar(){
    var tarea = document.getElementById("txt");
    if( tarea.value != ""){
        tasks.push({titulo:tarea.value,realizado:false,id:Math.random(0,100)});
        tarea.value = "";
        imprimir();
    }

}

function ID(id){
    for(var i = 0;i < tasks.length;i++){
        tarea = tasks[i];
        if(tarea.id == id){
            return i;
        }
       }
}

function eliminar(id){
    tasks.splice(ID(id),1);
    imprimir();
}


function imprimir(){
    let elemento = document.getElementById("tareas");
    elemento.innerHTML = "";
    for(let i = 0;i<tasks.length;i++){
        const tarea = tasks[i];
        elemento.innerHTML += `<div class='tarea'><input class="boton" type='button' ${ (tarea.id == ejecutado)? `value="Cancelar" onclick="cancelar()"` : `${tarea.realizado? `value='Eliminar' onclick='eliminar(${tarea.id})'` : `value='Empezar' onclick='empezar(${tarea.id})'` }`}><p> ${tarea.titulo}  </p> ${( tarea.realizado)? "":`${tarea.id != ejecutado? "<input type='txt' class='crono'  >": "" }` }</div>`;
    }
}

function temporizador(){
    tiempo = document.getElementsByClassName("crono")[ID(ejecutado)].value.split(":");
    time = parseInt(tiempo[0])*60 + parseInt(tiempo[1]) ;
    timer = setInterval(function(){imprimirTime();time--;
        if(time<0){  tasks[ID(ejecutado)].realizado = true; ejecutado = null ;imprimir();desactivarTem();}
    },1000)
}
function desactivarTem(){
    clearInterval(timer);
}

function imprimirTime(){
    const txt = document.getElementById("temporizador");
    const min = parseInt(time/60);
    const seg = time%60;
    txt.innerHTML = `${min < 10 ? "0": "" }${min}:${seg<10?"0":""}${seg}`;
}

function empezar(id){
    if(!ejecutado){
        ejecutado = id;
        temporizador();
        imprimir();
    }
}

function temporizador2(){
var txt = "";

}
function cancelar(){
    time = 0;
}


