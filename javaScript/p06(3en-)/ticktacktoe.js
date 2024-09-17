const tablero = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
const combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let turno = Math.random() < 0.5 ? true : false;
const posiciones = document.querySelectorAll(".position");
const pantalla = document.getElementById("infoJuego");
if (!turno) { bot() }
actualizarVentana()
var victoria = false;


function bot() {
    const tabler = tablero.flat();
    let combiG = [];
    let combiP = [];
    let maxO = 0;
    let maxX = 0;
    const libres = [];
    for (var combinacion of combinaciones) {
        var x = 0;
        var o = 0;
        for (var num of combinacion) {
            if (tabler[num] == "X") {
                x++;
                if (x > 1) {
                    maxX = x;
                    combiP = [];
                    combiP.push(combinacion);
                } else if (x == maxX) {
                    combiP.push(combinacion)
                }
            }
            else if (tabler[num] == "O") {
                o++;
                if (o > maxO) {
                    maxO = o;
                    combiG = [];
                    combiG.push(combinacion);
                } else if (o == maxO) {
                    combiG.push(combinacion)
                }
            }
            else {
                if (!libres.includes(num)) libres.push(num);
            }

            if (x > 0) o = 0;
        }
    }
    var opciones = []
    if (maxO >= maxX) {
        opciones = libres.filter(element => combiG.flat().includes(element));
        if (opciones.length == 0) opciones = libres.filter(element => combiP.flat().includes(element));
    }
    else if (maxO < maxX) {
        opciones = libres.filter(element => combiP.flat().includes(element));
    }
    else opciones = libres
    if (opciones.length == 0) opciones = libres;
    accion(opciones[Math.floor(Math.random() * opciones.length)] + 1)
}

function actualizarVentana() {
    pantalla.innerText = turno ? "Tu turno" : "Su turno";
}

function accion(num) {
    if (victoria) {
        return;
    }
    const posicion = document.querySelector(`.position[posicion="${num}"]`);
    if (!posicion.innerHTML) {
        posicion.innerHTML = turno ? "X" : "O";
        num--;
        tablero[parseInt(num / 3)][num % 3] = turno ? "X" : "O";
        turno = !turno;
        victoria = verificarVictoria()
        if (victoria) {
            pantalla.innerText = `${victoria} ganó la partida`;
        } else if (tablero.flat().every(celda => celda !== "")) {
            pantalla.innerText = "Empate";
        } else {
            actualizarVentana();
        }
        if (!turno) setTimeout(() => { bot() }, 1000)
    }
}


function verificarVictoria() {
    const tabler = tablero.flat();
    for (combinacion of combinaciones) {
        const [a, b, c] = combinacion
        if (tabler[a] == tabler[b] && tabler[a] == tabler[c] && tabler[a]) {
            return tabler[a]
        }
    }

    return false;
}












posiciones.forEach((p, i) => {
    p.addEventListener("mousedown", () => accion(i + 1));
});
