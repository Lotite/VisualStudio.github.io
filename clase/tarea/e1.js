let convodas = "Luisa Maria Carlota Ana Martina Claudia".split(" ");
let jugadora = prompt("Ingrese el nombre de una jugadora");
if(convodas.filter(function(e){return e==jugadora}).length){
    alert(`La jugadora ${jugadora} si esta en la lista de convocadas`)
}
else{
    alert("No se encuentra en la lista de la convocadas")
}