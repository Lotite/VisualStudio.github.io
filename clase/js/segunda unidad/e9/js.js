function getEtapa(edad) {
    switch (true) {
        case (edad >= 0 && edad <= 12):
            return "Niño"
            break;
        case (edad >= 13 && edad <= 26):
            return "Joven"
            break;
        case (edad >= 27 && edad <= 60):
            return "Adulto"
            break;
        default: return "Jubilado" //Intervalo entre 61 y el infinito
    }
}


var edad = prompt("Ingrese edad")
while (!(edad > 0)) //Esto hace que solo acepte dígitos mayores que 0
{
    var edad = prompt("Error solo se permiten dígitos mayores a 0. Ingrese una edad")
}
alert(`La etapa de la vida del usuario es ${getEtapa(edad)}`)