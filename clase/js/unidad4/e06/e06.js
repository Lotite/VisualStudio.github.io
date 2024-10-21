
const convocatorias = ["Lotfi,Bayi","Lotfi"];



///////FUNCIONES

//Ya no hace falta que mencione lo que hace esta funcion
////esto imprime de forma inicial todas las opcioes
function render(){
    let filas = document.getElementById("filas");
    filas.innerHTML = "";
    for (let i = 0; i < convocatorias.length; i++) {
        filas.innerHTML += imprimirFila(i,convocatorias[i])
    }
    añadirEvento();
    comprobarListado(convocatorias);
}





////solo crea y imprime una nueva fila
function añadirFila(){
    let filas = document.getElementById("filas");
    filas.innerHTML += imprimirFila(convocatorias.length)
    //añadirEventoError(convocatorias.length)
    convocatorias.push("")
    añadirEvento()
   
    comprobarListado(convocatorias)
}




//Esto actualiza constantemente los eventos de todos los botones,
//se que seria mejor solo añadir eventos al nuevo boton pero 
//si lo hago todos los demas pierden sus eventos;
function añadirEvento(){
    //Evento para añadir
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
            comprobarListado(convocatorias)
            }else{
                alert("No ingresaste ningun nombre")
            }
        })
    })
    //Evento para eliminar
    document.querySelectorAll(".boton.eliminar").forEach((btn)=>{
        let posicion = btn.getAttribute("posicion");
        btn.addEventListener("click",()=>{
            let fila = document.querySelector('.filas[posicion="'+posicion+'"]');
            convocatorias.splice(posicion, 1)
            comprobarListado(convocatorias)
            fila.remove()
        })
    })
}

//Esto devuelve el html que se añadira al documento.
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

///////////////Verificacion que esta en todas las convocatorias
function comprobarListado(convocatorias){
    let lista =  convocatorias[0].split(",");//seleciona los de la primera convocatoria ya que son los unicos que tiene la posivilidad que esten en las demas filas
    let listaFinal = lista.filter((jugador)=>{
        for (let i = 1; i < convocatorias.length ; i++) {
            const convocatoria = convocatorias[i].split(",");
            if(!convocatoria.includes(jugador)){
                return false //si no esta en una lista el jugador ; el bucle terminara para optimizar el filtro
            }
        }
        return true
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



//Elementos y botones
document.getElementById("bAdd").addEventListener("click",()=>{
    añadirFila()
})


render()




