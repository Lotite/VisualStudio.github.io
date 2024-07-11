// constante
const body = document.body;
const menuBody = document.getElementById("menuBody");
const menuTabla = document.getElementById("menutabla");
const tablasElemento =  document.getElementById("tablas");
var tablaSelect = {tablaid : null , filaid : null , celda : null};
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
    if(e.button == 0) creadorTabla("hola",null,CodificarTabla(tablaSelect.tablaid))
    })


////menuTabla
document.getElementById("EliminarTabla").addEventListener("mousedown",function(e){
    if(e.button == 0) eliminarTabla()
    })
document.getElementById("EliminarFila").addEventListener("mousedown",function(e){
    if(e.button == 0) eliminarFila()
    })
document.getElementById("EliminarCelda").addEventListener("mousedown",function(e){
    if(e.button == 0) eliminarCelda()
    })

document.getElementById("AñadirFila").addEventListener("mousedown",function(e){
    if(e.button == 0) añadirFila()
    })
document.getElementById("AñadirCelda").addEventListener("mousedown",function(e){
    if(e.button == 0) añadirCelda()
    })
document.getElementById("CodificarTabla").addEventListener("mousedown",function(e){
    console.log(CodificarTabla(tablaSelect.tablaid).toString() )
})


////eventosFunciones

document.getElementById("tablas").addEventListener("mousedown", function(e) {
    e.stopPropagation();
    if(e.button==2){
        selecionarTabla();
        console.log(tablaSelect.tablaid)
        menuTabla.style.display = 'flex'
        menuTabla.style.left  = e.clientX  
        menuTabla.style.top =  e.clientY
    }else{
        menuTabla.style.display = 'none'
    }
    menuBody.style.display="none"
    
});



/*
function cargarFuncionesTablas(){
    document.querySelectorAll(".tablas").forEach( (tabla) => {
        tabla.addEventListener("mousedown", function(e) {
            e.stopPropagation();
            if(e.button==2){
                selecionarTabla();
                console.log(tablaSelect.tablaid)
                menuTabla.style.display = 'flex'
                menuTabla.style.left  = e.clientX  
                menuTabla.style.top =  e.clientY
            }
            menuBody.style.display="none"
            
        });
        
    })
}
*/


//Funciones
function selecionarTabla(){
    tablaSelect.tablaid = document.querySelector(".tablas:hover")
    tablaSelect.filaid = tablaSelect.tablaid.querySelector("tr:hover")
    tablaSelect.celda = tablaSelect.filaid.querySelector("td:hover")
}
function creadorTabla(Titulo,num,filas){
    num = num || 4;
    Titulo = Titulo || "Sin Titulo"
    const tabla = document.getElementById("tablas").appendChild(document.createElement("table"))
    tabla.className = "tablas"
    const th = tabla.appendChild(document.createElement("tr")).appendChild(document.createElement("th"))
    th.innerText = Titulo;
    th.setAttribute("colspan",1000)
    creadorFilas(tabla,filas,num)
    cargarFuncionesTablas();
}

function creadorFilas(tabla,filas,num){
    
    for(let i = 0; i< (filas ? filas.length : 1 );i++){
        const tr =  tabla.appendChild(document.createElement("tr"))
        var fila = (filas ?  filas[i].length==0 ? null : filas[i]  : null)  ;
        for(let j = 0; j< ( fila ? fila.length : num? num : getMaxColumn(tabla));j++){
            const td = tr.appendChild(document.createElement("td"));
            td.setAttribute("colspan",fila ? fila[j][0] : 1);
            td.setAttribute("rowspan",fila ? fila[j][1] : 1);
        }
        
    }
    
    /*
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
    */
    
}

function eliminarTabla(){
    tablaSelect.tablaid.remove();
}

function eliminarFila(){
    tablaSelect.filaid.remove();
}

function eliminarCelda(){
    tablaSelect.celda.remove();
}

function añadirFila(){
    creadorFilas(tablaSelect.tablaid,[[]])
}

function añadirCelda(){
    tablaSelect.filaid.appendChild(document.createElement("td"))
}

function getMaxColumn(tabla){
    const columns = 0;
    //const pr = document.querySelector(`.tablas[tablaid=${tablaId}]`).getElementsByTagName("tr") 
    //for(const num of pr )  if(num.childElementCount > columns){columns = num.childElementCount} 
    return  4;
}

function CodificarTabla(tablaId){
    const tabla = document.querySelector(`.tablas[tablaid="${tablaId}"]`).getElementsByTagName("tr")
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