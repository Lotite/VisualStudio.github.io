let numPuz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(() => Math.random() - 0.5);
numPuz.push(0)
const objsPuz = []


function render() {
    let temArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]
    if (temArray.every((valor, pos) => valor === numPuz[pos])) {
        setTimeout(() => { alert("Ganaste") }, 500)
    }
}
class Puz {
    #num;
    #puz;
    #tablero
    #lado
    constructor(num,tablero,lado) {
        this.#num = num;
        this.#lado = lado;
        this.#puz = this.#crearPuz();
        this.#setPosicion();
        this.#puz.addEventListener("click", () => this.#mover());
        this.#tablero = tablero;
        this.#tablero.push(this);
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
            this.#tablero.find(puz => puz.#num == numPuz[temPuz]).#mover(temPuz)
        }
    }

    #estanMismaLineaX() {
        return Math.floor(this.#getPosicion(this.#num) / this.#lado) == Math.floor(this.#getPosicion(0) / 4)
    }

    #estanMismaLineaY() {
        return this.#getPosicion(this.#num) % this.#lado == this.#getPosicion(0) % 4
    }


    #setPosicion(posicion = this.#getPosicion(this.#num)) {
        let x = posicion % this.#lado;
        let y = Math.floor(posicion / this.#lado);
        this.#puz.style.transform = `translate(${x * 102}%, ${y * 102}%)`;
    }

    #getPosicion(num) {
        let posicion = numPuz.indexOf(num);
        return posicion;
    }
}


class tablero{
    #num
    #tablero
    #objsPuz = []
    constructor(num){
        this.#num = num;
        this.#tablero = document.createElement("div")
        this.#tablero.classList.add("contenedor")
        this.#crearPiezas()
        return this.#tablero;
    }
    #crearPiezas(){
        const nums = this.#range(1,this.#num**2)
        nums.push(0)
        alert(nums)
        nums.forEach(num => {
            if (num == 0) { return }
            const Tempuz = new Puz(num,this.#objsPuz,this.#num)
            this.#tablero.appendChild(Tempuz.imprimir());
        })
        return this.#tablero;
        
    }


    #range(num1 , num2){
        const nums = []
        for (let i = num1; i < num2; i++) {
            nums.push(i)
        }
        return nums.sort(() => Math.random() - 0.5);
}


}

// numPuz.forEach(num => {
//     if (num == 0) { return }
//     const Tempuz = new Puz(num)
//     document.getElementById("contenedor").appendChild(Tempuz.imprimir());
//     objsPuz.push(Tempuz);

// })
document.getElementById("personalizar").addEventListener("keydown",(e)=>{
    if(!/[0-9]/.test(e.key) && e.key != "Backspace"){
        e.preventDefault()
    }
})

document.querySelector("body").appendChild(new tablero(2))




// document.querySelector("#contenedor").addEventListener("click", () => {
//     render()
// })
