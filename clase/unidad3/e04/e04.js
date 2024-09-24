print = alert
let r = prompt("Ingrese radio");

function diametro(){
    return `${2*r}cm / `
}
function perimetro(){
    return `${ (2*r*Math.PI).toFixed(2)}cm / `
}
function aria(){
    return `${(r**2*Math.PI).toFixed(2)}cm2 / `
}
function volumen(){
    return `${(3/4*r**3*Math.PI).toFixed(2)}cm3 `
}

print(diametro() + perimetro() + aria() + volumen() )