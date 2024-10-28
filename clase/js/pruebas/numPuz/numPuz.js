let numPuz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(() => Math.random() - 0.5);
numPuz.push(0)
let objsPuz = []

function render() {
    let temArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
    if (temArray.every((valor, pos) => valor === numPuz[pos])) {
        setTimeout(() => { alert("Ganaste") }, 500)
    }
}
class Puz {
    #num;
    #puz;
    constructor(num) {
        this.#num = num;
        this.#puz = this.#crearPuz();
        this.#setPosicion();
        this.#puz.addEventListener("click", () => this.#mover());
        return this;
    }

    imprimir() {
        return this.#puz;
    }

    #crearPuz() {
        const elemento = document.createElement("div")
        elemento.classList.add("num")
        elemento.textContent = this.#num
        return elemento;
    }

    #mover(posnum = this.#getPosicion(this.#num)) {
        let pos0 = this.#getPosicion(0);
        let mover;
        if (this.#estanMismaLineaX()) {
            mover = !this.moverOtro(posnum, pos0,1);
        } else if (this.#estanMismaLineaY()) {
            mover = !this.moverOtro(posnum, pos0,4);
        }


        if (mover) {
            pos0 = this.#getPosicion(0);
            numPuz[pos0] = numPuz[posnum];
            numPuz[posnum] = 0;
            this.#setPosicion();
        }
    }


    moverOtro(posnum, pos0, diferencia) {
        if (posnum != pos0 + diferencia && posnum != pos0 - diferencia) {
            let temPuz = pos0 - posnum > 0 ? posnum + diferencia : posnum - diferencia
            objsPuz.find(puz => puz.#num == numPuz[temPuz]).#mover(temPuz)
        }
    }

    #estanMismaLineaX() {
        return Math.floor(this.#getPosicion(this.#num) / 4) == Math.floor(this.#getPosicion(0) / 4)
    }

    #estanMismaLineaY() {
        return this.#getPosicion(this.#num) % 4 == this.#getPosicion(0) % 4
    }


    #setPosicion(posicion = this.#getPosicion(this.#num)) {
        let x = posicion % 4;
        let y = Math.floor(posicion / 4);
        this.#puz.style.transform = `translate(${x * 101.5}%, ${y * 101.5}%)`;
    }

    #getPosicion(num) {
        let posicion = numPuz.indexOf(num);
        return posicion;
    }
}

numPuz.forEach(num => {
    if (num == 0) { return }
    const Tempuz = new Puz(num)
    document.getElementById("contenedor").appendChild(Tempuz.imprimir());
    objsPuz.push(Tempuz);

})


document.querySelector("#contenedor").addEventListener("click", () => {
    render()
})
