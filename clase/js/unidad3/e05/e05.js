let numero = parseInt(prompt("Ingrese un número entero:"));

alert(
    `${numero.toExponential()} / ${numero.toFixed(4)} / ${numero.toString(2)} / ${numero.toString(8)} / ${numero.toString(16).toUpperCase()}`
)