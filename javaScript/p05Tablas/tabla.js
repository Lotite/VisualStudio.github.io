// constante
const body = document.body;
const menuBody = document.getElementById("menuBody");
const menuTabla = document.getElementById("menutabla");
const tablasElemento =  document.getElementById("tablas");
var tablaSelect = {tablaid : document.getElementById("") , filaid : document.getElementById("") , celda : document.getElementById("")};
const tablas = [];

// eventos

document.body.addEventListener("mousedown", function(e) {
    if(e.button==2){
        menuBody.style.display = 'flex'
        menuBody.style.left  = e.clientX + "px"
        menuBody.style.top =  e.clientY + "px"
    }
    if(e.button==0){
        menuBody.style.display="none"
    }
    menuTabla.style.display="none";
});




document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

////menubody
document.getElementById("menuBody").addEventListener("mousedown",function(e){
    e.stopPropagation();
    if(e.button == 0) menuBody.style.display = "none";
})

document.getElementById("CrearTabla").addEventListener("mousedown",function(e){
    if(e.button == 0) creadorTablaVacia()
})



////menuTabla
/////////CrearElementos
document.getElementById("AñadirFila").addEventListener("mousedown",function(e){
    if(e.button == 0) creadorFilasVacias(0)
})

document.getElementById("AñadirAriba").addEventListener("mousedown",function(e){
    if(e.button == 0) creadorFilasVacias(-1)
})

document.getElementById("AñadirAbajo").addEventListener("mousedown",function(e){
    if(e.button == 0) creadorFilasVacias(1)
})



////////EliminarElementos
document.getElementById("EliminarTabla").addEventListener("mousedown",function(e){
    if(e.button == 0) tablaSelect.tablaid.remove()
})

document.getElementById("EliminarTabla").addEventListener("mousedown",function(e){
    if(e.button == 0) tablaSelect.tablaid.remove()
})

document.getElementById("EliminarFila").addEventListener("mousedown",function(e){
    if(e.button == 0) tablaSelect.filaid.remove()
})
////eventosFunciones

document.getElementById("tablas").addEventListener("mousedown", function(e) {
    e.stopPropagation();
    selecionarTabla();
    if(e.button==2){
        console.log(tablaSelect.tablaid)
        menuTabla.style.display = 'flex'
        menuTabla.style.left  = e.clientX  
        menuTabla.style.top =  e.clientY
        if(!tablaSelect.filaid.classList.contains("filas")){
            for (const elemento of document.getElementsByClassName("menutabla1")) {
                elemento.style.display = "none";
            }
        }else{
            for (const elemento of document.getElementsByClassName("menutabla1")) {
                elemento.style.display = "";
            }
        }
    }else{
        const celda = tablaSelect.celda
        //Marcar fila      tablaSelect.filaid.style.border = "red 3px solid"
        celda.style.border = "red 3px solid"
        menuTabla.style.display = 'none'
    }
    menuBody.style.display="none"
    
});







//Funciones

function selecionarTabla(){
    tablaSelect.tablaid = document.querySelector(".tablas:hover")
    tablaSelect.filaid = tablaSelect.tablaid.querySelector("tr:hover")
    tablaSelect.celda = tablaSelect.filaid.querySelector("td:hover") 
}

function creadorTablaVacia(){
    const tabla = document.getElementById("tablas").appendChild(document.createElement("table"))
    tabla.className = "tablas"
    tablaSelect.tablaid = tabla;
    const th = document.createElement("th")
    th.setAttribute("colspan",10000)
    const input = document.createElement("input")
    input.className = "txt"
    input.value = "SIN TITULO"
    th.appendChild(input)
    tabla.appendChild(document.createElement("tr")).appendChild(th)
    creadorFilasVacias()
}
function creadorFilasVacias(posicion = 0 ){
    const tabla = tablaSelect.tablaid
    const num = getMaxColumn(tabla);
    const tr = document.createElement("tr")
    tr.className = "filas"
    for(let i = 0; i < num; i++){
        const td = document.createElement("td")
        td.className = "celda"
        const input = document.createElement("input")
        input.className = "txt"
        td.appendChild(input)
        tr.appendChild(td)
    }
    switch (posicion) {
        case 0:
            tabla.appendChild(tr);
            break;
        case 1:
            tablaSelect.filaid.after(tr);
            break;
        case -1:
            tablaSelect.filaid.before(tr);
            break;
    }
    //Intento
    // for (var td of tabla.getElementsByTagName("td")){
    //     td.style.width = `${(1/getMaxColumn(tabla))*100}%`;
    // }
}

function getMaxColumn(tabla = document.getElementById("")){
    return tabla.children[1]? tabla.children[1].childElementCount : 6;
}