let a = window
let v = 1, h = 1 ;
let parado=false;
let interval;
let crear = document.getElementById("bCrear")
crear.addEventListener("click",()=>{
    a = a.open("","", "width=500,height=200")
    a.document.write("<h1>Mira Como reboto</h1>")
    interval = setInterval(()=>{moverse()},10)
})
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
let borrar = document.getElementById("bBorrar")
borrar.addEventListener("click",()=>{
    a.close()
})



function moverse(){
    let x = a.screenX + 1*v;
    let y = a.screenY + 1*h;
    a.moveTo(x,y)
    if(x + a.innerWidth+5>=window.innerWidth || x<=0) v=v*-1;
    if(y + a.innerHeight-10>=window.innerHeight || y<=0) h=h*-1; 
}