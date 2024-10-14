
////////////Funciones 
export function primeraLetramayuscula(txt) {
    return txt.charAt(0).toLocaleUpperCase() + txt.slice(1).toLocaleLowerCase()
}
//contar
export function mostrarNumero(lista,texto){
    return  texto + " "+ lista.length
}


export function render(lista,buscador) {
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
            imprimir = lista.filter(dato => dato.toLocaleLowerCase().startsWith(buscador.toLocaleLowerCase()))
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




export function eliminar(lista,opcion){
    let eliminado="";
    if(opcion==1){
         eliminado = lista.shift();
    }else{
         eliminado = lista.pop();
    }
    alert("Se a eliminado " + eliminado.imprimir())
    return lista
}


export function Ordenar(lista,opcion,tipo){
    switch (opcion) {
        case "1":
            lista.reverse()
            break;
        case "2":
            if(tipo==1){
                lista.sort()
            }else{
                lista.sort( (obj1,obj2)=>{ 
                    return Object.values(obj1)[0]<Object.values(obj2)[0] ? -1 : 1;
                } )
            }
            break;
        case "3":
            lista.sort( () => { return 0.5 - Math.random() });
            break;
    }
    return lista;
}

