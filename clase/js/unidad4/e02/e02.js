let dnis = [];
document.getElementById("bDni").addEventListener("click", () => {
    getDNIs()
})
function getDNIs() {
    dnis = [];
    let char = document.getElementById("inputDni").value;
    let num = "TRWAGMYFPDXBNJZSQVHCKE".indexOf(char.toUpperCase());
    if (num >= 0) {
        for (let i = 1; i <= 999; i++) {
            if (i % 23 == num) dnis.push(i);
        }
    }else{
        alert("No se permite ese caracter")
    }
    render(dnis);
}


function render(dnis) {
    document.getElementById("DNIs").innerHTML = "";
    dnis.forEach((value) => {
        document.getElementById("DNIs").innerHTML += `<div class="col-2" ">${value < 100 ? value < 10 ? "00" : "0" : ""}${value}</div>`
    })
}