

addEventListener("mousemove", mouseMove);

function mouseMove(mouse){
    x = document.getElementById("x");
    y = document.getElementById("y");
    x.innerHTML = "Posicion x: " + mouse.clientX;
    y.innerHTML = "Posicion y: " + mouse.pageY;
}
