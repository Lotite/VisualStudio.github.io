let paises = ["Marruecos", "China", "España", "Francia", "Cuba", "Venezuela"];


document.getElementById("inputSearch").addEventListener("input", () => { render() })



document.getElementById("bAdd").addEventListener("click", () => {
    let opcion = document.getElementById("selectAdd").value
    let pais = document.getElementById("inputAdd").value
    if (pais.lenght != 0) {
        pais = primeraLetramayuscula(pais)
        if (opcion == 1) {
            paises.unshift(pais)
        } else {
            paises.push(pais)
        }
        render()
    }
})


function primeraLetramayuscula(txt) {
    return txt.charAt(0).toLocaleUpperCase() + txt.slice(1)
}




document.getElementById("bEliminarP").addEventListener("click", () => {
    let pais = paises.shift();
    alert("Se a eliminado " + pais)
    render()
})

document.getElementById("bEliminarF").addEventListener("click", () => {
    let pais = paises.pop();
    alert("Se a eliminado " + pais)
    render()
})

function render() {
    let viewPaises = document.getElementById("pantallaPaises");
    let buscador = document.getElementById("inputSearch").value
    viewPaises.innerText = "";
    let imprimir = []
    if (buscador == "") {
        imprimir = paises
    } else {
        let num = parseInt(buscador);
        if(num >=1){
            imprimir.push(paises[num-1])
        }
        else{
            imprimir = paises.filter(pais => pais.toLocaleLowerCase().startsWith(buscador.toLocaleLowerCase()))
        }
    }
    document.getElementById("h3Paises").innerText = `Total paises: ${paises.length}`
    imprimir.forEach((value) => {
        viewPaises.innerHTML += `<div class="col-4 text-center ";">${value}</div>`;
    })
}




document.getElementById("bOrdenar").addEventListener("click", () => {
    
    let opcion = document.getElementById("opcionOr").value
    switch (opcion) {
        case "1":
            paises.reverse()
            break;
        case "2":
            paises.sort()
            break;
        case "3":
            paises.sort( () => { return 0.5 - Math.random() });
            break;
    }
    render()

})

render();