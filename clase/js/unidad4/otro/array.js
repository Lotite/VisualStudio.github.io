export function mostrarNumero(array) {
    alert(array.length)
}
export function imprimir(array) {
    alert(array.join(" , "))
}

export function añadir(array, opcion, valor) {
    switch (opcion) {
        case "1":
            array.unshift(valor)
            break;
        case "2":
            array.push(valor)
            break;
        default: alert("No se añadio el valor")
            return array;
    }
}

export function eliminar(array, opcion, print) {
    let valor
    switch (opcion) {
        case "1":
            valor = array.shift()
            break;
        case "2":
            valor = array.pop()
            break;
        default: alert("No se elimino el valor")
    }
    alert(print(valor))
    return array;
}



export function filtrar(array = [],opcion,valor,filtro){
    let resultado = "No se pudo encontrar nada"
    switch(opcion){
        case "1":
            resultado = array[parseInt(valor)]
            break;
        case "2":
            resultado = filtro(valor)
        break;
    }
    alert(resultado)
}

export function ordenar(array = [],opcion,filtro){
    switch(opcion){
        case "1":
            return array
        case "2":
            return array.reverse()   
        case "3":
            return array.sort(filtro)
    }
}