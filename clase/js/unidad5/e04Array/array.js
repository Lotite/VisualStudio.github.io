let nums = [10, 23, 1, 22, 5]

document.querySelector("h3").addEventListener("mouseover", () => {
    document.querySelector("p").innerHTML = "Ordenar por menor a mayor"
    imprimir([].concat(nums).sort((num1, num2) => (num1 - num2)))
})

document.querySelector("h3").addEventListener("mouseout", () => {
    document.querySelector("p").innerHTML = "Ordenar por Aparicion"
    imprimir(nums);
})





function imprimir(lista) {
    let contenedor = document.querySelector(".row")
    contenedor.innerHTML = "";
    lista.forEach(num => {
        contenedor.innerHTML += `<div class="col mx-1 bg-info rounded-3">${num}</div>`
    });
}


imprimir(nums)