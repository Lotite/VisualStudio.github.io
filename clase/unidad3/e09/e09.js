print = console.log
let digitos = document.getElementById("digitos")
let char = document.getElementById("char")
let b = document.getElementById("button")
b.addEventListener("click", () => ejecutar())
digitos.addEventListener("keydown",(e)=>{
    if(digitos.value.length>=8){
        if(/[A-Za-z]{1}/.test(e.key)  && e.key.length == 1 ){
        char.value = e.key
        char.focus()
        }
    }
    if(!(/[0-9]/.test(e.key) || e.key=="Backspace" )){
        e.preventDefault()
    }
})

char.addEventListener("keydown",(e)=>{
    if(!(/[A-Za-z]/.test(e.key) || e.key=="Backspace" )){
        e.preventDefault()
    }
    if(e.key=="Enter") ejecutar()
})




let dni = "TRWAGMYFPDXBNJZSQVHCKE"
function ejecutar(){
    if(!/[0-9]{8}/.test(digitos.value) || !/[a-zA-Z]/.test(char.value) || char.value.toUpperCase() != dni.charAt(((parseInt(digitos.value)%23)))  ){
        alert("Error en el patron");
    }else{
        alert("Ta bien")
    }
}