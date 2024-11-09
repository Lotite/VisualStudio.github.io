const musica = new Audio("./musica.m4a")
const funcion = (e) => {
    if (e instanceof MouseEvent && e.type === 'mousedown') {
        e.target.style.transition = "none";
    } else {
        e.target.style.transition = " all 150ms ease-in-out";
        e.target.style.scale = 0.5
    }
    const b = e.target.getBoundingClientRect();
    const xi = b.left + window.scrollX;
    const yi = b.top + window.scrollY;


    let x1, y1;
    do {
         x1 = (Math.random() * window.innerWidth)
         y1 = (Math.random() * window.innerHeight)
    } while (salioDePantalla(x1, y1))

        const xm = mitad(xi, x1);
        const ym = mitad(yi, y1);
        e.target.style.left = xm + "px";
        e.target.style.top = ym + "px";

    musica.play()
    new Audio("./efecto.m4a").play()
    setTimeout(() => {
        e.target.style.scale = 1
        e.target.style.left = x1+ "px";
        e.target.style.top = y1 + "px";
    }, 100)
}



document.querySelector("button").addEventListener("mouseover", funcion)
document.querySelector("button").addEventListener("mousedown", funcion, false)







function salioDePantalla(x=-1,y=-1){
    if(x <200 || x + 200 > window.innerWidth || y < 200 || y + 200 > window.innerHeight)
        return true;
    return false;
}


function mitad(num1,num2){
    return (num1+num2)/2 + ((Math.random()-0.5)*500)
}


