
////////////Funciones 
export function primeraLetramayuscula(txt) {
    return txt.charAt(0).toLocaleUpperCase() + txt.slice(1).toLocaleLowerCase()
}
//contar
export function mostrarNumero(lista,texto){
    return  texto + " "+ lista.length
}


export function render(lista,buscador,filtro,alerta) {
    let imprimir = []
    if (buscador == "") {
        //si la entrada esta vacia no filtrara la busqueda
        imprimir = lista
    } else {
        let num = parseInt(buscador);
        if(num >=1){
            //Si es un numero solo imprimira el pais que este en la posicion del numero
            imprimir.push(lista[num-1])
        }
        else{
            //si es un String buscara los paises que su nombre empiecen con ese String
            imprimir = lista.filter(valor => filtro(valor,buscador))
            alerta(buscador)
        }
    }
    return imprimir;
}

export function añadirValor(lista,opcion,valor){
        if (opcion == 1 || opcion == "1") {
            lista.unshift(valor)
        } else {
            lista.push(valor)
        }
        return lista
    
}




export function eliminar(lista,opcion,imprimir){
    let eliminado="";
    if(opcion==1){
         eliminado = lista.shift();
    }else{
         eliminado = lista.pop();
    }
    imprimir(eliminado)
    return lista
}


export function ordenar(lista,opcion,ordenar){
    switch (opcion) {
        case "1":
            lista.reverse()
            break;
            case "2":
                lista.sort(ordenar)
                break;
        case "3":
            lista.sort( () => { return 0.5 - Math.random() });
            break;
    }
    return lista;
}

