let digitos = document.getElementById("digitos")
let char = document.getElementById("char")
let b = document.getElementById("button")
b.addEventListener("click", () => ejecutar())




//parte de la tarea
let dni = "TRWAGMYFPDXBNJZSQVHCKE"
let nie = "XYZ"
function ejecutar(){
    //let text = digitos.value
    let text = digitos.value;
    if(nie.includes(text.charAt(0))){
        text = nie.indexOf(text.charAt(0)) + text.substring(1)
    }
    char.value = dni.charAt(parseInt(text)%23)
}





