//Variables
    //Estos son las figuras que tendra el juego
const figuras = {
    I: { forma: [[1, 1, 1, 1]], color: "#33ffe0" },
    O: { forma: [[1, 1], [1, 1]], color: "#33ff3f" },
    L: { forma: [[0, 0, 1], [1, 1, 1]], color: "#33fff3" },
    J: { forma: [[1, 0, 0], [1, 1, 1]], color: "#ff33e9" },
    Z: { forma: [[1, 1, 0], [0, 1, 1]], color: "#ff3377" },
    S: { forma: [[1, 1, 0], [0, 1, 1]], color: "#4cff33" },
    T: { forma: [[0, 1, 0], [1, 1, 1]], color: "#ff3333" }
}
let figuraActuall = newFigura()
const bloques = []
const globalLineas = []
let mover = setInterval(bajar, 500)

//Funciones
function newFigura() {
    const figura = figuras["IOLJZST".charAt((Math.random() * 7).toFixed(0))]
    //const figura = figuras.I
    const elemento = document.createElement("div")
    elemento.classList.add("figura")
    addBloques(elemento, figura)
    document.querySelector("main").appendChild(elemento)
    return { elemento: elemento, figura: figura, posicion: { x: 0, y: 0 } }
}


function addBloques(elemento = figuraActuall.elemento, figura = figuraActuall.figura) {
    elemento.innerHTML = ""
    const forma = figura.forma
    forma.forEach((fila, y) => {
        fila.forEach((celda, x) => {
            if (celda) {
                const bloque = document.createElement("div")
                bloque.classList.add("bloque")
                bloque.style.left = `${x * 100 / forma[0].length}%`
                bloque.style.top = `${y * 100 / forma.length}%`
                bloque.style.width = `${100 / forma[0].length}%`
                bloque.style.height = `${100 / forma.length}%`
                bloque.style.backgroundColor = figura.color
                elemento.appendChild(bloque)
            }
        })
    })
    elemento.style.width = `${forma[0].length * 10}%`
    elemento.style.height = `${forma.length * 5}%`

}

function rotar(elemento = figuraActuall.elemento, forma = figuraActuall.figura.forma) {
    const nuevaForma = []
    const filas = forma.length
    const columnas = forma[0].length
    for (let i = 0; i < columnas; i++) {
        nuevaForma[i] = []
        for (let j = 0; j < filas; j++) {
            nuevaForma[i][j] = forma[filas - 1 - j][i]
        }
    }
    figuraActuall.figura.forma = nuevaForma
    addBloques(elemento,{"forma": nuevaForma})
}

function rotarInversa() {
    for (let i = 0; i < 3; i++) rotar()
}

function detectarColision(figura1, figura2) {
    const { left: x1, top: y1, width: w1, height: h1 } = figura1.getBoundingClientRect();
    const { left: x2, top: y2, width: w2, height: h2 } = figura2.getBoundingClientRect();

    return (x1 + 1 < x2 + w2 && x1 + w1 - 1 > x2 && y1 + 1 < y2 + h2 && y1 + h1 - 1 > y2);
}



function comprobarColisiones() {
    let blocks = [...figuraActuall.elemento.querySelectorAll(".bloque")]
    return bloques.some(bloque => {
        return blocks.some(block => {
            return detectarColision(bloque, block)
        })
    })
}

function compobarSalidaPantalla() {
    const pantalla = document.querySelector("main")
    const bloques = [...figuraActuall.elemento.querySelectorAll(".bloque")]
    return bloques.some(bloque => {
        return !detectarColision(pantalla, bloque)
    })
}

function bajar() {
    if(!mover) return;
    figuraActuall.posicion.y += 5
    const h = figuraActuall.elemento.getBoundingClientRect().height.toFixed(0);
    const h2 = document.querySelector("main").getBoundingClientRect().height.toFixed(0);
    const fh = (h / h2 * 20).toFixed(0) * 5
    figuraActuall.elemento.style.top = `${figuraActuall.posicion.y}%`
    if ((figuraActuall.posicion.y + fh) > 100 || comprobarColisiones()) {
        figuraActuall.posicion.y -= 5
        figuraActuall.elemento.style.top = `${figuraActuall.posicion.y}%`
        colocar()
        figuraActuall = newFigura()
    }
}



function colocar() {
    const padre = document.querySelector("main")
    const px = padre.getBoundingClientRect().x
    const py = padre.getBoundingClientRect().y
    const ph = padre.getBoundingClientRect().height
    const pw = padre.getBoundingClientRect().width

    figuraActuall.elemento.querySelectorAll(".bloque").forEach(bloque => {
        let poss = bloque.getBoundingClientRect()
        let x = poss.x - px
        let y = poss.y - py
        bloque.style.width = "10%"
        bloque.style.height = "5%"
        bloque.style.left = `${(x / pw * 100).toFixed(0)}%`
        bloque.style.top = `${(y / ph * 100).toFixed(0)}%`
        padre.append(bloque)
        bloques.push(bloque)
        const fila = 19 - (y / ph * 20).toFixed(0);
        if (!globalLineas[parseInt(fila)]) {
            globalLineas[parseInt(fila)] = []
        }
        globalLineas[parseInt(fila)].push(bloque)
    })
    verificarLienas()
    figuraActuall.elemento.remove()
}


function verificarLienas() {
    for (let i = 0; i < globalLineas.length; i++) {
        const linea = globalLineas[i]
        if (linea && linea.length >= 10) {
            linea.forEach(bloque => {
                bloques.splice(bloques.indexOf(bloque), 1)
                bloque.remove()
            })
            globalLineas.splice(i, 1)
            gravedad(i)
            i--
        }
    }

}
function gravedad(i) {
    globalLineas.forEach((linea,index) => {
        if(index>=i)
        linea.forEach(bloque => {
            bloque.style.top = `${parseInt(bloque.style.top.replace("%", "")) + 5}%`
        })
    })
}


function moverHorizaontal(valor){
    if(!mover) return;
    figuraActuall.posicion.x += valor
            figuraActuall.elemento.style.left = `${figuraActuall.posicion.x}%`
            if (compobarSalidaPantalla() || comprobarColisiones()) {
                figuraActuall.posicion.x -= valor
                figuraActuall.elemento.style.left = `${figuraActuall.posicion.x}%`
            }
}

//Eventos

document.querySelector("#rotar").addEventListener("click", () => {
    figuraActuall.figura.forma = rotar()
    addBloques()
})




addEventListener("keyup", (e) => {
        
    switch (e.key) {
        case "ArrowLeft":
            moverHorizaontal(-10)
            break;
        case "ArrowRight":
            moverHorizaontal(10)
            break;
        case "ArrowDown":
            bajar()
            break;
        case " ":
            if(mover) {
                clearInterval(mover)
                mover = false;
            }
            else mover = setInterval(bajar, 500)
            break;
        case "ArrowUp":
            rotar()
            if (comprobarColisiones() || compobarSalidaPantalla())
                rotarInversa()
            break;
    }
})




