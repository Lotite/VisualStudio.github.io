// document.querySelector("main").addEventListener("mousemove",(e)=>{
//     let text = document.querySelector("#puntuaje")
//     let ob = e.target.getBoundingClientRect()
//     let x = e.clientX - ob.left
//     let y = e.clientY - ob.top
//     text.innerHTML = `x = ${x} y = ${y}`

// })

/*

    <div class="figura">
        <div class="bloque" id="b1"></div>
        <div class="bloque" id="b2"></div>
        <div class="bloque" id="b3"></div>
        <div class="bloque" id="b4"></div>
    </div>


*/

//Variables
const figuras = {
    I: { forma: [[1, 1, 1, 1]], color: "red" },
    O: { forma: [[1, 1], [1, 1]], color: "red" },
    L: { forma: [[0, 0, 1], [1, 1, 1]], color: "red" },
    J: { forma: [[1, 0, 0], [1, 1, 1]], color: "red" },
    Z: { forma: [[1, 1, 0], [0, 1, 1]], color: "red" },
    S: { forma: [[1, 1, 0], [0, 1, 1]], color: "red" },
    T: { forma: [[0, 1, 0], [1, 1, 1]], color: "red" }
}
let figuraActuall = newFigura()
const bloques = []
const globalLineas = []
let mover = setInterval(bajar, 500)

//Funciones
function newFigura() {
    //const figura = figuras["IOLJZST".charAt(Math.floor(Math.random() * 7))]
    const figura = figuras.I
    const elemento = document.createElement("div")
    elemento.classList.add("figura")
    addBloques(elemento, figura.forma)
    document.querySelector("main").appendChild(elemento)
    return { elemento: elemento, figura: figura, posicion: { x: 0, y: 0 } }
}


function addBloques(elemento = figuraActuall.elemento, forma = figuraActuall.figura.forma) {
    elemento.innerHTML = ""
    forma.forEach((fila, y) => {
        fila.forEach((celda, x) => {
            if (celda) {
                const bloque = document.createElement("div")
                bloque.classList.add("bloque")
                bloque.style.left = `${x * 30}px`
                bloque.style.top = `${y * 30}px`
                elemento.appendChild(bloque)
            }
        })
    })
    elemento.style.width = `${forma[0].length * 30}px`
    elemento.style.height = `${forma.length * 30}px`

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
    addBloques(elemento, nuevaForma)
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
    figuraActuall.posicion.y += 30
    figuraActuall.elemento.style.top = `${figuraActuall.posicion.y}px`
    if (figuraActuall.posicion.y + figuraActuall.elemento.getBoundingClientRect().height > 600 || comprobarColisiones()) {
        figuraActuall.posicion.y -= 31
        figuraActuall.elemento.style.top = `${figuraActuall.posicion.y}px`
        colocar()
        figuraActuall = newFigura()
    }
}



function colocar() {
    const padre = document.querySelector("main")
    const px = padre.getBoundingClientRect().x
    const py = padre.getBoundingClientRect().y

    figuraActuall.elemento.querySelectorAll(".bloque").forEach(bloque => {
        let poss = bloque.getBoundingClientRect()
        let x = poss.x - px
        let y = poss.y - py
        bloque.style.left = `${x}px`
        bloque.style.top = `${y}px`
        padre.append(bloque)
        bloques.push(bloque)
        const fila = y / 30
        const columna = x / 30
        if (!globalLineas[parseInt(19 - fila)]) {
            globalLineas[parseInt(19 - fila)] = []
        }
        globalLineas[parseInt(19 - fila)].push(bloque)
    })
    verificarLienas()
    figuraActuall.elemento.remove()
}


function verificarLienas() {
    //     globalLineas.forEach((linea, index) => {
    //         if (linea.length >= 10) {
    //             linea.forEach(bloque => {
    //                 bloques.splice(bloques.indexOf(bloque), 1)
    //                 bloque.remove()
    //             })
    //             gravedad(index)
    //             globalLineas.splice(index, 1)
    //         }
    //     })
    // }


    for (let i = 0; i < globalLineas.length; i++) {
        const linea = globalLineas[i]
        if (linea && linea.length >= 10) {
            linea.forEach(bloque => {
                bloques.splice(bloques.indexOf(bloque), 1)
                bloque.remove()
            })
            gravedad(i)
            globalLineas.splice(i, 1)
            i--
        }
    }

}

function gravedad(num) {
    //bloques =  bloques.filter(bloque=>bloque!=null)
    //
    for (let i = globalLineas.length - 1; i >= num; i--) {
        const linea = globalLineas[i]
        linea.forEach(bloque => {
            bloque.style.top = `${parseInt(bloque.style.top.replace("px", "")) + 30}px`
        })
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
            figuraActuall.posicion.x -= 30
            figuraActuall.elemento.style.left = `${figuraActuall.posicion.x}px`
            if (compobarSalidaPantalla() || comprobarColisiones()) {
                figuraActuall.posicion.x += 30

            }
            figuraActuall.elemento.style.left = `${figuraActuall.posicion.x}px`
            break;
        case "ArrowRight":
            figuraActuall.posicion.x += 30
            figuraActuall.elemento.style.left = `${figuraActuall.posicion.x}px`
            if (compobarSalidaPantalla() || comprobarColisiones()) {
                figuraActuall.posicion.x -= 30
                figuraActuall.elemento.style.left = `${figuraActuall.posicion.x}px`
            }
            break;
        case "ArrowDown":
            bajar()
            break;
        case " ":
            clearInterval(mover)
            mover = setInterval(bajar, 100)
            break;
        case "ArrowUp":
            rotar()
            clearInterval(mover)
            if (comprobarColisiones() || compobarSalidaPantalla()) {
                rotarInversa()
            }
            mover = setInterval(bajar, 500)
            break;
    }
})




