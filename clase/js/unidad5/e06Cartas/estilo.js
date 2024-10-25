export function rotar(carta,imagen){
    if(carta.getAttribute("carta")=="espalda"){
        carta.setAttribute("carta","frente")
        rotacion(carta,imagen,0,180,180)
    }
    else{
        carta.setAttribute("carta","espalda")
        rotacion(carta,"carta.png",180,360,0)
    }
}


function rotacion(carta, imagen,inicio,medio,final) {
    carta.style.transform = `perspective(700px) rotateY(${inicio}deg)`
        setTimeout(() => {
            carta.style.backgroundImage = `url(${imagen})`
            carta.style.transform =`perspective(700px) rotateY(${medio}deg)`
            carta.style.transition = "all 0ms linear"
            carta.style.transform = `rotateY(${final}deg)`;
            carta.style.transition = "all 400ms linear,background-image 0ms linear"
        }, 400)
}
