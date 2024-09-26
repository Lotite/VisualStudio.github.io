document.write("<h1>Tabla de multiplicar 7 </h1>")
for(let i=0;i<=10;i++){
    document.write(`7 * ${i} = ${7*i} <br/>` )
}

document.write("<h1>Tabla de sumar 8 </h1>")
let i = 0
while(i<=10){
    document.write(`8 + ${i} = ${8+i} <br/>` )
    i++
}
i=1
document.write("<h1>Tabla de dividir 9 </h1>")
do{
    document.write(`9 / ${i} = ${ (9/i).toFixed(1) } <br/>` )
    i++
}while(i<=10)