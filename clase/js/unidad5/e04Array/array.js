<<<<<<< HEAD
let nums = [10,23,1,22,5]

document.querySelector("h3").addEventListener("mouseover",()=>{
    imprimir([].concat(nums).sort((num1,num2)=>(num1-num2)))
})
document.querySelector("h3").addEventListener("mouseout",()=>{
    imprimir(nums);
})
=======



let nums = [10,23,1,22,3]


>>>>>>> 8885422af8cab8f912e0baab9ca87fbeb8f63ad7

function imprimir(lista){
    let contenedor = document.querySelector(".row")
    contenedor.innerHTML = "";
    lista.forEach(num => {
        contenedor.innerHTML += `<div class="col mx-1 bg-info rounded-3">${num}</div>`
    });
}



<<<<<<< HEAD

=======
function ordenar(lista){
    return lista.sort()
}
>>>>>>> 8885422af8cab8f912e0baab9ca87fbeb8f63ad7


imprimir(nums)