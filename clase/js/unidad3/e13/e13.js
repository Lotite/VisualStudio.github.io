let ventana
let v = 1, h = 1 ;
let parado=false;
let interval;
let crear = document.getElementById("bCrear")

//Boton Crear
crear.addEventListener("click",()=>{
    ventana = window.open("windows","", "width=500,height=200")
    ventana.moveTo(window.screenX,window.screenY)
    // la linea de abajo es para darle estilo a la nueva ventana
    ventana.document.write("<body style='display: flex;justify-content: center;align-items: center;'><img src='https://img.icons8.com/color/1600/dvd-logo.png' width='200px' height='100px' /></body>")
    interval = setInterval(()=>{moverse()},10)
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
})




//Calcular movimiento
function moverse(){
    let x = ventana.screenX + 1*v;
    let y = ventana.screenY + 1*h;
    ventana.moveTo(x,y)
    //detector de direccion

    if(x + ventana.innerWidth>=window.innerWidth + window.screenX) v=-1;
    if(x<=window.screenX) v=1

    
    if(y + ventana.innerHeight-20>=window.innerHeight + window.screenY) h=-1
    if(y<=window.screenY) h =1 
}


