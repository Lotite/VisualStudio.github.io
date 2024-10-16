let paises = ["Marruecos", "China", "España", "Francia", "Cuba", "Venezuela"];
import * as lista from "./array.js";




///Mover
document.getElementById("bLupa").addEventListener("click",()=>{
    document.getElementById("inputSearch").focus()
})

document.getElementById("inputSearch").addEventListener("input", () => { 
    render();
})


//almacenara el pais segun la opcion selecionada
document.getElementById("bAdd").addEventListener("click", () => {
    let opcion = document.getElementById("selectAdd").value
    let pais = document.getElementById("inputAdd").value
    //verifica que la entrada no este vacia
    paises = lista.añadirValor(paises,opcion,pais)
    render()
    
})


//Elimina el Primero
document.getElementById("bEliminarP").addEventListener("click", () => {
    paises = lista.eliminar(paises,1,imprimir)
    render()
})


//Elimina el ultimo
document.getElementById("bEliminarF").addEventListener("click", () => {
    paises = lista.eliminar(paises,2,imprimir)
    render()
})

function imprimir(pais){
    alert("Se a eliminado " + pais)
}


document.getElementById("bOrdenar").addEventListener("click", () => {
    let opcion = document.getElementById("opcionOr").value
    paises = lista.ordenar(paises,opcion,ordenar)
    render()

})

function ordenar(pais1,pais2){
    return pais1<pais2 ? 1:-1;
}


function render(){
    let viewInfo = document.getElementById("pantallaPaises");
    let buscador = document.getElementById("inputSearch").value
    let titulo = document.getElementById("h3Paises")
    titulo.innerText= lista.mostrarNumero(paises,"Total paises:");
    viewInfo.innerText = "";
    let imprimir = lista.render(paises,buscador,filtro,alerta)
    imprimir.forEach(pais => {
        viewInfo.innerHTML += `<div class="col-4 text-center ";">${pais}</div>`;
    });
}

function filtro(pais,buscador){
    return pais.toLocaleLowerCase().startsWith(buscador.toLocaleLowerCase())
}
function alerta(buscador){
    if(paises.includes(buscador)) "La posicion del pais es" + alert(paises.indexOf(buscador))
}

render();