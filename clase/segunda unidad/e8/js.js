var respuestaCorrecta = "Adolfo Suárez";
let respuesta = prompt("¿Cuál fue el primer presidente de la democracia española?");
while (respuesta != respuestaCorrecta) {
    let txt;
    switch (respuesta) {
        case "Adolfo":
            txt = "Te falta el apellido. ¿Cuál fue el primer presidente de la democracia española?"
            break;
        case "Suárez":
            txt = "Te falta el nombre. ¿Cuál fue el primer presidente de la democracia española?"
            break;
        default: txt = "ERROR. Inténtelo de nuevo. ¿Cuál fue el primer presidente de la democracia española?";
    }
    respuesta = prompt(txt);
}
alert("Acceso permitido.");