var datoNumero = document.getElementById("datoNumero");
const datoFecha =document.querySelector('#datoFecha');
const datoPin =document.querySelector('#datoPin');
let current = "";
let cardNuemro = [];
let cardFecha = [];
let cardPin = [];







datoNumero.addEventListener("keydown", (e)=>{
    if(!["Backspace","ArrowLeft","ArrowRight"].includes(e.key)){
        e.preventDefault();
        escribir(datoNumero,e.key,4,"-",19)
        if(datoNumero.value.length >= 19){datoFecha.focus()}
    }
})

datoFecha.addEventListener("keydown", (e)=>{
    if(!["Backspace","ArrowLeft","ArrowRight"].includes(e.key)){
        e.preventDefault();
        escribir(datoFecha,e.key,2,"/",5)
        if(datoFecha.value.length >= 5){datoPin.focus()}
    }
})

datoPin.addEventListener("keydown", (e)=>{
    if(!["Backspace","ArrowLeft","ArrowRight"].includes(e.key)){
        e.preventDefault();
        escribir(datoPin,e.key,0,null,3)
        if(datoPin.value.length >= 3){datoPin.blur()}
    }
})



function escribir(elemento,letra,repe,caracter,maxcaracter){
    const botones = ["1","2","3","4","5","6","7","8","9","0"];
    if(botones.includes(letra)  && elemento.value.length < maxcaracter ){
        const parte = elemento.value.split(caracter);
        if((parte[parte.length -1].length) % repe == 0 && parte[parte.length -1].length!=0){
            elemento.value += caracter;
        }

        elemento.value += letra;
    };
}


