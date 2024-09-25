let a = window
let v = 1, h = 1 ;
let parado=false;
let interval;
let crear = document.getElementById("bCrear")

//Boton Crear
crear.addEventListener("click",()=>{
    a = a.open("","", "width=500,height=200")
    a.moveTo(window.screenX,window.screenY)
    // la linea de abajo es para darle estilo a la nueva ventana
    a.document.write("<body style='display: flex;justify-content: center;align-items: center;'><img src='https://img.icons8.com/color/1600/dvd-logo.png' width='200px' height='100px' /></body>")
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
    a.focus()
    parado = !parado
})

//Boton Borrar
let borrar = document.getElementById("bBorrar")
borrar.addEventListener("click",()=>{
    a.close()
})




//Calcular movimiento
function moverse(){
    let x = a.screenX + 1*v;
    let y = a.screenY + 1*h;
    a.moveTo(x,y)
    //detector de direccion

    if(x + a.innerWidth>=window.innerWidth + window.screenX) v=-1;
    if(x<=window.screenX) v=1

    
    if(y + a.innerHeight-20>=window.innerHeight + window.screenY) h=-1
    if(y<=window.screenY) h =1 
}


