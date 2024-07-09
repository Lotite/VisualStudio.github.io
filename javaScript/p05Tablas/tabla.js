// constante
const body = document.body;
const menuBody = document.getElementById("menuBody");
const menuTabla = document.getElementById("menutabla");
const tablasElemento =  document.getElementById("tablas");
var tablaSelect;
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
})

document.getElementById("CrearTabla").addEventListener("click",function(e){
    creadorTabla()
    if(e.button == 0) menuBody.style.display = "none";
})

document.getElementById("CargarTabla").addEventListener("mousedown",function(e){
    console.log("hola")
    if(e.button == 0) creadorTabla("hola",null,CodificarTabla(tablaSelect))
})


////menuTabla
document.getElementById("EliminarTabla").addEventListener("mousedown",function(e){
    if(e.button == 0) eliminarTabla()
    })
document.getElementById("AñadirFila").addEventListener("mousedown",function(e){
    if(e.button == 0) añadirFila()
})
document.getElementById("CodificarTabla").addEventListener("mousedown",function(e){
    console.log(CodificarTabla(tablaSelect).toString() )
})


////eventosFunciones

function cargarFuncionesTablas(){
    document.querySelectorAll(".tablas").forEach( (tabla) => {
        tabla.addEventListener("mousedown", function(e) {
            e.stopPropagation();
            if(e.button==2){
                tablaSelect = tabla.getAttribute("idtable");
                console.log(tablaSelect)
                menuTabla.style.display = 'flex'
                menuTabla.style.left  = e.clientX  + "px"
                menuTabla.style.top =  e.clientY
            }
            menuBody.style.display="none"
            
        });
        
    })
}



//Funciones

function creadorTabla(Titulo,num,filas){
    const id = (Math.random()*100).toFixed(2);
    tablasElemento.innerHTML += `<table class="tablas" idtable="${id}"><th colspan="${num?num : 4}">${Titulo? Titulo : "Sin titulo"}</th></table>`
    creadorFilas(id,filas,num?num : 4)
    cargarFuncionesTablas();
}

function creadorFilas(tablaId,filas,num){
    const id = parseInt(Math.random()*100).toFixed(2);
    const tabla = document.querySelector(`.tablas[idtable="${tablaId}"]`)
    
    
    
    
    var txt = ""
    for(let i = 0; i< (filas ? filas.length : 1 );i++){
        var fila = (filas ?  filas[i].length==0 ? null : filas[i]  : null)  ;
        txt += "<tr>";
        for(let j = 0; j< ( fila ? fila.length : num? num : getMaxColumn(tablaId));j++){
            txt += `<td colspan="${fila ? fila[j][0] : 1}"  rowspan="${fila ? fila[j][1] : 1}"  ></td>`;
        }
        txt += "</tr>";
        
    }
    
    tabla.innerHTML += txt;
    
    
}

function eliminarTabla(){
    document.querySelector(`.tablas[idtable="${tablaSelect}"]`).remove();
}

function añadirFila(){
    creadorFilas(tablaSelect,[[]])
}

function getMaxColumn(tablaId){
    const columns = 0;
    //const pr = document.querySelector(`.tablas[idtable=${tablaId}]`).getElementsByTagName("tr") 
    //for(const num of pr )  if(num.childElementCount > columns){columns = num.childElementCount} 
    return  4;
}

function CodificarTabla(tablaId){
    const tabla = document.querySelector(`.tablas[idtable="${tablaId}"]`).getElementsByTagName("tr")
    const cod1 = [];
    for(let i =1;i<tabla.length;i++){
        console.log("Añadiendo FIla");
        const cod2 = [];
        for(let j =0;j<tabla[i].getElementsByTagName("td").length;j++){
            console.log("Columna");
            cod2.push([]);
        }
        cod1.push(cod2);
    }
    return cod1;
}