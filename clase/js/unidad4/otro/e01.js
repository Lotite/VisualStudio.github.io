import * as arrays from "./array.js"
let paises = ["España","Francia","Italia"]



while (true) {
    let num = prompt(`Menu de selecion
        1 para mostrar el numero de paises
        2 mostrar paises
        3 añadir pais
        4 eliminar pais
        5 consultar pais
        `)
    switch(num){
        case "1":
            arrays.mostrarNumero(paises)
        break;
        case "2":
           let opcion1 = prompt(`Como quieres imprimirlos
                1 como ya estas posicionados
                2 revertir el orden
                3 ordenarlos alfabéticamente
                `)
            paises = arrays.ordenar(paises,opcion1,filtro)
            arrays.imprimir(paises)
        break;
        case "3":
            let opcion2 = prompt(`
                1 añadir al principio
                2 añadir al final
                `)
            let pais = prompt("Ingrese pais")
            arrays.añadir(paises,opcion2,pais)
        break;
        case "4":
            let opcion3 = prompt(`
                1 Eliminar el primero
                2 Eleiminar el ultimo
                `)
                paises = arrays.eliminar(paises,opcion3,imprimir)
        break;
        case "5":
            let opcion4 = prompt(`
                1 buscar por posicion
                2 buscar por nombre
                `)
            let pais2 = prompt(`
                Ingrese el pais
                `)
            arrays.filtrar(paises,opcion4,pais2,filtroBusqueda)
        break;
    }
}
function filtroBusqueda(nombre){
    return paises.indexOf(nombre)
}
function imprimir(pais){
    alert("Se elimino " + pais)
}
function filtro(pais1,pais2){
    return pais1>pais2? 1 : -1;
}