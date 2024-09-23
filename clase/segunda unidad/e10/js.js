//Primer metodo 
let convodas = "Luisa Maria Carlota Ana Martina Claudia".split(" ");
metodo1();
metodo2();



function metodo1() {
    let jugadora = prompt("Ingrese el nombre de una jugadora (Metodo1 usando el includes)")
    if (convodas.includes(jugadora)) {
        alert(`La jugadora ${jugadora} si esta en la lista de convocadas`)
    }
    else {
        alert("No se encuentra en la lista de la convocadas")
    }
}

//Segundo 
function metodo2() {
    let jugadora = prompt("Ingrese el nombre de una jugadora (Metodo2 usando el filter)")
    if (convodas.filter(function (e) { return e == jugadora }).length) {
        alert(`La jugadora ${jugadora} si esta en la lista de convocadas`)
    }
    else {
        alert("No se encuentra en la lista de la convocadas")
    }
}

