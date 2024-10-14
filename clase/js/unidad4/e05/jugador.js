class Jugador{
    constructor(){
        this.vida = 1
    }

    entrenar(){
        this.vida++
    }


    getVida(){
        return `Tu fuerza es ${this.vida}`
    }


}

let jugador = new Jugador()

function entrenar(){
    jugador.entrenar()
}

function imprimirVida(){
    alert(jugador.getVida());
}