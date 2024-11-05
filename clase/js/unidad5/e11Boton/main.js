const musica = new Audio("./musica.m4a")
const funcion = (e)=>{
    e.target.style.left = (Math.random() * window.innerWidth) + "px";
    e.target.style.top = (Math.random() * window.innerHeight) + "px";
    musica.play()
    new Audio("./efecto.m4a").play()
}




document.querySelector("button").addEventListener("mouseover", funcion)
document.querySelector("button").addEventListener("mousedown", funcion , false)








