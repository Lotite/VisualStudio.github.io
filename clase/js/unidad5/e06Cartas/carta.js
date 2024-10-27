let seleccionado = null
let parejas = 0;

function render(){
    document.querySelector("h3").innerText = `Parejas encontrados: ${parejas}`
    if(parejas>=6){
        document.getElementById("notificacion").style.backgroundColor = "rgb(72, 143, 27)"
        document.getElementById("notificacion").style.transform = "translateY(20px)"
        document.querySelector("button").addEventListener("click",()=>{
            location.reload();
        })
    }
}


function getCookies(){
    const objCookies = {};
    const cookies = document.cookie.replaceAll(" ","").split(";");
    cookies.forEach(cookie=>{
        const [key,value] = cookie.split("=");
        objCookies[key] = value;
    })
    return objCookies;
}
function setCookies(key,value){
    document.cookie = `${key}=${value}`
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
        const tr = document.createElement("td")
        tr.innerHTML = `<div class="carta"></div>`
        return tr;
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
        const carta = this.#carta.firstChild;
        carta.style.transform = `perspective(700px) rotateY(${inicio + 90}deg)`
        setTimeout(() => {
            carta.style.transition = "all 300ms linear,background-image 0ms ease-in-out"
            carta.style.backgroundImage = `url(${imagen})`
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
                parejas++;
                render()
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

//COdigo de creacion
const cookies = getCookies();
if(cookies.nombre){
    [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].sort(() => { return Math.random() > 0.5 ? 1 : -1 }).forEach((num, index) => {
        if (index % 4 == 0 && index != 12) {
            document.querySelector("table").append(document.createElement("tr"))
        }
        document.querySelector("table").lastChild.append((new Carta(num)).imprimir())
        
    })
    setCookies("visitas",cookies.visitas-(-1))
    document.querySelector("h2").innerHTML = `Bienvenido ${cookies.nombre}`
    document.querySelector("p").innerText = `Has visitado esta pagina ${cookies.visitas} veces`
}else{
    document.body.innerHTML= `
        <div class="mx-auto" style="width:500px;margin-top:50px">
            <h3 class="text-center">Ingresa tu nombre</h3>
            <input type="text" placeholder="Tu nombre" >
            <button class="btn btn-light btn-outline-primary btn-lg">Jugar</button>
        </div>
    `
    setCookies("visitas",1)
    document.querySelector("button").addEventListener("click",()=>{
        document.cookie = `nombre=${document.querySelector("input").value}`
        location.reload();
    })
}


// document.querySelector("table").append((new Carta(1)).imprimir())
// document.querySelector("table").append((new Carta(1)).imprimir())



