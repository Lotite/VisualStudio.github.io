var cuestionario = [];

class opciones{
    opcns = []
    constructor(){}
    add(txt,respuesta){
        this.opcns.push({txt,respuesta});
    }
}

class pregunta{
    constructor(txt,opciones){
        this.txt = txt;
        this.opciones = opciones;
    }
}


op = new opciones();
op.add("Lotfi",true);
op.add("Latfi",false);
pr = new pregunta("Cual es mi nombre",op);

cuestionario.push(pr);

function imprimir(){

    var txt = document.getElementsByClassName("cuestionario")[0];
    txt.innerHTML = "";
    
cuestionario.forEach(pre =>{
    var re = "";
    pre.opciones.opcns.forEach(ops=>{
        re += "<p class='respuesta'>" +  ops.txt  + "<input type='radio' name='ops'/>" +  "</p>";
    })
    txt.innerHTML += " <div class='pregunta'> <p>" + pre.txt + "</p>" + re + "</div>";
    txt.innerHTML += "</br>";
} )
   
}












function addOpcion(){
    var texto = document.getElementsByClassName("addPregunta")[0];
    texto.innerHTML += "  <div class='respuesta'> <input type='txt'  class='txt' /> <input type='radio' class='tf' name='pregunta'></div>";
}

function enviarDatos(){
    var txt1 = document.getElementById("pre").value;
    var opcs = document.getElementsByClassName("txt");
    var valores = document.getElementsByClassName("tf");
    var memoria = new opciones();
    for(var i = 0; i<opcs.length ; i++){
        memoria.add(opcs[i].value   , valores[i].checked);
    }
    cuestionario.push({txt : txt1 ,opciones : memoria });
    imprimir()
}




imprimir()


