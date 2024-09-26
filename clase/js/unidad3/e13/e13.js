let ventana
let v = 1, h = 1 ;
let parado=false;
let interval;
let crear = document.getElementById("bCrear")
let numImagen = 1

//Boton Crear
crear.addEventListener("click",()=>{
    if(!ventana){
    ventana = window.open("windows","", "width=500,height=200")
    ventana.moveTo(window.screenX,window.screenY)
    // la linea de abajo es para darle estilo a la nueva ventana
    ventana.document.write("<body style='display: flex;justify-content: center;align-items: center;'><img id='img' src='img/dvd1.png' width='200px' height='100px' /></body>")
    interval = setInterval(()=>{moverse()},10)
    }
})


//Boton Parar
let parar = document.getElementById("bParar")
parar.addEventListener("click",()=>{
    if(parado){
        parar.innerHTML = "Parar"
        interval = setInterval(()=>{moverse()},10)
    }else{
        parar.innerHTML = "Continuar"
        clearInterval(interval)
    }
    ventana.focus()
    parado = !parado
})

//Boton Borrar
let borrar = document.getElementById("bBorrar")
borrar.addEventListener("click",()=>{
    clearInterval(interval)
    ventana.close()
    ventana=null;
})




//Calcular movimiento
function moverse(){
    let x = ventana.screenX + 1*v;
    let y = ventana.screenY + 1*h;
    ventana.moveTo(x,y)
    //detector de direccion

    if(x + ventana.innerWidth>=window.innerWidth + window.screenX) {
        v=-1;
        cambiarImagen()
    }
    if(x<=window.screenX){
         v=1
         cambiarImagen();
    }
    
    if(y + ventana.innerHeight-20>=window.innerHeight + window.screenY) {
        h=-1
        cambiarImagen();
    }
    if(y<=window.screenY) {
        h =1
        cambiarImagen();
    } 
    
}


function cambiarImagen(){
    let num
    do{
       num = parseInt(Math.random()*9 +1)
    }while(num == numImagen)
        numImagen = num
    ventana.document.getElementById("img").setAttribute("src",`img/dvd${numImagen}.png`)
}


