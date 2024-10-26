let seleccionado = null

function getCookeis(){
    let objCookeis = {};
    let cookies = document.cookie.replaceAll(" ","").split(";");
    cookies.forEach(cookei=>{
        let [key,value] = cookei.split("=");
        objCookeis[key] = value;
    })
    return objCookeis;
}


class Carta {
    #num;
    #carta;
    #funRotar;
    #selecTemporal = null;
    #lado = "espalda"
    constructor(num) {
        this.#num = num
        this.#carta = this.#crearCarta();
        this.#funRotar = this.#rotar.bind(this);
    }


    #crearCarta() {
        let td = document.createElement("td")
        return td;
    }

    imprimir() {
        this.#añadirEvento(this.#carta)
        return this.#carta;
    }


    #añadirEvento() {
        this.#carta.addEventListener("click", this.#funRotar)
    }
    #eliminarEvento() {
        this.#carta.removeEventListener("click", this.#funRotar)
    }


   

    #rotar() {
        if (this.#lado == "espalda") {
            this.#rotacion(`imagenes/c${this.#num}.png`, 0, 180, 180);
           this.#lado = "frontal";
            this.#aciones();
        } else {
            this.#lado = "espalda";
            this.#rotacion("carta.png", 180, 360, 0);
            if(seleccionado && seleccionado.#carta==this.#carta){
                seleccionado = false;
            }
        }
    }


    #rotacion(imagen, inicio, medio, final) {
        let carta = this.#carta;
        carta.style.transform = `perspective(700px) rotateY(${inicio + 90}deg)`
        setTimeout(() => {
            carta.style.transition = "all 300ms linear,background-image 0ms ease-in-out"
            carta.querySelector
            carta.style.transform = `perspective(700px) rotateY(${medio}deg)`
            carta.style.transform = `rotateY(${final}deg)`;
            carta.style.transition = "all 300ms linear,background-image 0ms ease-in-out"
        }, 300)
    }


    #aciones() {
        if (seleccionado) {
            this.#selecTemporal = seleccionado;
            seleccionado = false;
            if (this.#esIgual()) {
                this.#eliminarEvento();
                this.#selecTemporal.#eliminarEvento();
            } else {
                setTimeout(() => {
                    this.#rotar()
                    this.#selecTemporal.#rotar();
                }, 1000)
            }

        } else {
            seleccionado = this;
        }
    }




    #esIgual() {
        return this.#num === this.#selecTemporal.#num && this.#carta !== this.#selecTemporal.#carta;
    }
}



let carta1 = new Carta(1);

let cookies = getCookeis();
if(true/**cookies.nombre*/){
    [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].sort(() => { return Math.random() > 0.5 ? 1 : -1 }).forEach((num, index) => {
        if (index % 4 == 0 && index != 12) {
            document.querySelector("table").append(document.createElement("tr"))
        }
        document.querySelector("table").lastChild.append((new Carta(num)).imprimir())
    })
}else{
    document.body.innerHTML= `
        <div class="mx-auto" style="width:500px;margin-top:50px">
            <h3 class="text-center">Ingresa tu nombre</h3>
            <input type="text" placeholder="Tu nombre" >
            <button class="btn btn-light btn-outline-primary btn-lg">Jugar</button>
        </div>
    `
    document.querySelector("button").addEventListener("click",()=>{
        document.cookie = `nombre=${document.querySelector("input").value}`
        location.reload();
    })
}


// document.querySelector("table").append((new Carta(1)).imprimir())
// document.querySelector("table").append((new Carta(1)).imprimir())



