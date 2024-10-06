let paises = ["Marruecos", "China", "España", "Francia", "Cuba", "Venezuela"];
////////////Funciones 
function primeraLetramayuscula(txt) {
    return txt.charAt(0).toLocaleUpperCase() + txt.slice(1).toLocaleLowerCase()
}


//Procesa los datos y los imprime en la pantalla
function render() {
    let viewPaises = document.getElementById("pantallaPaises");
    let buscador = document.getElementById("inputSearch").value
    viewPaises.innerText = "";
    let imprimir = []
    if (buscador == "") {
        //si la entrada esta vacia no filtrara la busqueda
        imprimir = paises
    } else {
        let num = parseInt(buscador);
        if(num >=1){
            //Si es un numero solo imprimira el pais que este en la posicion del numero
            imprimir.push(paises[num-1])
        }
        else{
            //si es un String buscara los paises que su nombre empiecen con ese String
            imprimir = paises.filter(pais => pais.toLocaleLowerCase().startsWith(buscador.toLocaleLowerCase()))
        }
    }
    //Imprime el total de paises
    document.getElementById("h3Paises").innerText = `Total paises: ${paises.length}`
    //Imprime los resultados en la pantalla
    imprimir.forEach((value) => {
        viewPaises.innerHTML += `<div class="col-4 text-center ";">${value}</div>`;
    })
}


///////////Elementos o Botones


//buscar al teclear
document.getElementById("inputSearch").addEventListener("input", () => { render() })


//almacenara el pais segun la opcion selecionada
document.getElementById("bAdd").addEventListener("click", () => {
    let opcion = document.getElementById("selectAdd").value
    let pais = document.getElementById("inputAdd").value
    //verifica que la entrada no este vacia
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





//Elimina el Primero
document.getElementById("bEliminarP").addEventListener("click", () => {
    let pais = paises.shift();
    alert("Se a eliminado " + pais)
    render()
})
//Elimina el ultimo
document.getElementById("bEliminarF").addEventListener("click", () => {
    let pais = paises.pop();
    alert("Se a eliminado " + pais)
    render()
})





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
document.getElementById("bLupa").addEventListener("click",()=>{
    document.getElementById("inputSearch").focus()
})


render();