// constante
const body = document.body;
const memoria = [];
const menuBody = document.getElementById("menuBody");
const menuTabla = document.getElementById("menutabla");
const menuCargar = document.getElementById("MenuCargar");
const tablasElemento =  document.getElementById("tablas");
var inputmin;

//variables
var tablaSelect = {tablaid : document.getElementById("") , filaid : document.getElementById("") , celda : document.getElementById("")};
let moviendose = false;
let posx, posy;

// eventos

document.body.addEventListener("mousedown", function(e) {
    cerrarVentanas()
    if(e.button==2){
        menuBody.style.display = 'flex'
        menuBody.style.left  = e.clientX + "px"
        menuBody.style.top =  e.clientY + "px"
    }
});




document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

////menubody
document.getElementById("menuBody").addEventListener("mousedown",function(e){
    e.stopPropagation();
    if(e.button == 0) cerrarVentanas();
})

document.getElementById("CrearTabla").addEventListener("mousedown",function(e){
    if(e.button == 0) creadorTablaVacia()
    })

document.getElementById("CargarTabla").addEventListener("mousedown",function(e){
    e.stopImmediatePropagation()
    if(e.button == 0) {
        menuCargar.style.left = "35%"
        menuCargar.style.top = "33%"
        menuCargar.style.display = "flex"
    }
    cerrarVentanas()
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



//////////Funciones Elementos
document.getElementById("CodificarTabla").addEventListener("mousedown",function(e){
    if(e.button == 0)      navigator.clipboard.writeText(codificarTabla())    //navigator.clipboard.writeText(codificarTabla())
})
////eventosFunciones

document.getElementById("tablas").addEventListener("mousedown", function(e) {
    e.stopPropagation();
    selecionarTabla();
    cerrarVentanas()
    if(e.button==2){
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
    }
});

//MenuCargar
document.getElementById("cerrar").addEventListener("mousedown", function(e){
    e.stopPropagation();
    menuCargar.style.display = "none"});
    
    document.getElementById("cargarTitulo").addEventListener('mousedown', function(e)  {
        moviendose = true;
        const rect = menuCargar.getBoundingClientRect();
        posx = e.clientX - rect.left;
        posy = e.clientY - rect.top;
        e.preventDefault();
    });
    
    document.addEventListener('mouseup', function() {
        moviendose = false;
    });
    
    document.addEventListener('mousemove', function(e) {
        if (moviendose) {
            menuCargar.style.left = e.clientX - posx + 'px';
            menuCargar.style.top = e.clientY - posy + 'px';
        }
    });
    //Funciones
    
    function cerrarVentanas(){
        for(var ventana of document.getElementsByClassName("ventana")){
            ventana.style.display = "none"
        }
    }
    
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
            const input = document.createElement("textarea")
            input.className = "txt"
            //Texto en las celdas
            input.addEventListener('input', function(e) {
                if(!inputmin) inputmin = this.scrollHeight
                this.rows = this.scrollHeight*1.1/(inputmin/2)
                if(!this.value) this.rows = 1;
            });
            
            
            
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
    
    
    function codificarTabla(tabla = tablaSelect.tablaid){
        const trs = tabla.getElementsByTagName("tr") , codtablas = []
        for (var tr of trs){
            const codtr = []
            const tds = tr.querySelectorAll("td , th")
            for(var td of  tds){
                codtr.push(td.querySelector("input , textarea").value)
            }
            codtablas.push(codtr);
        } 
        
        return JSON.stringify(codtablas);
    }
    
    