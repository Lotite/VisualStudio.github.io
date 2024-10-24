


let nums = [10,23,1,22,3]



function imprimir(lista){
    let contenedor = document.querySelector(".row")
    contenedor.innerHTML = "";
    lista.forEach(num => {
        contenedor.innerHTML += `<div class="col mx-1 bg-info rounded-3">${num}</div>`
    });
}



function ordenar(lista){
    return lista.sort()
}


imprimir(nums)