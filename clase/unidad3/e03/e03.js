print = alert
let x, y;
 
function calculadora(num) {
    switch (parseInt(num)) {
        case 1:
            x = prompt("Ingresa una base")
            y = prompt("Ingresa una potencia")
            return `La potencia de ${x} elevado a ${y} es ${Math.pow(x,y)}`;
            break;
        case 2:
            do {
                x = prompt("Ingrese un numero")
            } while (parseInt(x) < 0)
            return Math.sqrt(x);
            break;
        case 3:
            x = prompt("Ingrese un decima")
            return `${parseInt(x)}  ${parseInt(x) + 1}`;
            break;
        case 4:
            do {
                x = prompt("Ingresa un grado entre 0 y 360")
            } while (x < 0 && x > 360)
            return `cos ${Math.cos(x)} sen ${Math.sign(x)} tan ${Math.tan(x)}`;
            break;
    }
}

print(calculadora(prompt("1 potencia  \n2 Raiz  \n3 Redondeo \n4 Trigonometria")))

