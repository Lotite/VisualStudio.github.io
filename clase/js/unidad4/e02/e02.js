document.getElementById("bDni").addEventListener("click", () => {
    getDNIs()
})
function getDNIs() {
    dnis = [];
    let char = document.getElementById("inputDni").value;
    let num = "TRWAGMYFPDXBNJZSQVHCKE".indexOf(char.toUpperCase());//el caracter que selecionaremos de este String en la posicion del resto de la dibision por 23 sera el caracter final del DNI
    if (num >= 0) {
        for (let i = 1; i <= 999; i++) {
            if (i % 23 == num) dnis.push(i);
        }
    } else {
        alert("No se permite ese caracter")
    }
    render(dnis);
}
//Imprime los resultados en la pantalla;
function render(dnis) {
    document.getElementById("DNIs").innerHTML = "";
    dnis.forEach((value) => {
        document.getElementById("DNIs").innerHTML += `<div class="col-2" ">${value.toString().padStart(3, "0")}</div>`
    })
}