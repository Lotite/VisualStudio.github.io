
const convocatorias = ["Lotfi,Bayi","Lotfi","Lotfi"];






function render(){
    let filas = document.getElementById("filas");
    filas.innerHTML = "";
    for (let i = 0; i < convocatorias.length; i++) {
        filas.innerHTML += imprimirFila(i,convocatorias[i])
    }
    añadirEvento();
    comprobarListado();
}

// function añadirEventoError(num){
//     alert(num)
//     document.querySelector('.btn[posicion="'+num+'"').addEventListener("click",()=>{
//         alert(num)
//     })
// }


document.getElementById("bAdd").addEventListener("click",()=>{
    añadirFila()
})

function añadirFila(){
    let filas = document.getElementById("filas");
    filas.innerHTML += imprimirFila(convocatorias.length)
    convocatorias.push("")
    añadirEvento()
    comprobarListado()
}

function añadirEvento(){
    document.querySelectorAll(".boton.añadir").forEach((btn)=>{
        let posicion = btn.getAttribute("posicion")
        btn.addEventListener("click",()=>{
            let input = document.querySelector('input[posicion="'+posicion+'"]')
            let text = input.value
            if(text!=""){
            text = primeraLetramayuscula(text);
            let lista = document.querySelector('.lista[posicion="'+posicion+'"]')
            convocatorias[posicion]+= (convocatorias[posicion] == "" ? "" : ",") +text;
            lista.innerHTML=convocatorias[posicion];
            input.value="";
            comprobarListado()
            }else{
                alert("No ingresaste ningun nombre")
            }
        })
    })
    document.querySelectorAll(".boton.eliminar").forEach((btn)=>{
        let posicion = btn.getAttribute("posicion");
        btn.addEventListener("click",()=>{
            let fila = document.querySelector('.filas[posicion="'+posicion+'"]');
            fila.remove()
        })
    })
}


function imprimirFila(num,texto = ""){
    return `                <div class="filas p-2 border-top border-primary d-flex align-items-center" posicion="${num}">
                    <div class="input-group ">
                        <button class="boton añadir btn btn-light btn-outline-dark" posicion="${num}">Añadir</button>
                        <input type="text" class="form-control border-dark" posicion="${num}" placeholder="Nombre">
                    </div>
                    <div  class="lista ms-4" posicion="${num}">
                        ${texto}
                    </div>
                    <button class="boton eliminar btn btn-light btn-outline-dark" posicion='${num}'>Eliminar</button>
                </div>`
}


function comprobarListado(){
    const listaFinal = [];
    const lista1 = convocatorias[0].split(",");
    lista1.forEach((jugador)=>{
        let añadir = true;
        for (let i = 1; i < convocatorias.length; i++) {
            const convocatoria = convocatorias[i].split(",");
            if(!convocatoria.includes(jugador)){
                añadir=false
                break;
            }
        }
        if(añadir) listaFinal.push(jugador);
    })
    let imprimir = document.getElementById("imprimirRow")
    imprimir.innerHTML = "";
    listaFinal.forEach((jugador)=>{
        imprimir.innerHTML+=`<div class="col-3 txt-center">${jugador}</div>`
    })
}

function primeraLetramayuscula(txt) {
    return txt.charAt(0).toLocaleUpperCase() + txt.slice(1)
}


render()




