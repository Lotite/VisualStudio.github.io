document.getElementById("enviar").addEventListener("click",(e)=>{
    e.preventDefault();
    const nombre = document.getElementById("name")
    const correo = document.getElementById("email")
    const contraseña = document.getElementById("password")
    const r_contraseña = document.getElementById("r-password");
     if(verificar(nombre,/^[A-Za-z]+(\s[A-Za-z]+)*$/,"!Error Ingresa solo el nombre y el apellido")){
        localStorage.setItem("nombre",nombre.value)
     }
     if(verificar(correo,/^[a-zA-Z]+@[a-z]+.[a-z]+$/, "!Error Ingresa un correo valido")){
        localStorage.setItem("correo",correo.value)
     }
     verificarContraseña(contraseña,r_contraseña)

    
})

function verificarContraseña(pass,r_pass){
    if(pass.value.length <6){
        pass.style.border = "1px solid red"
        r_pass.style.border = "1px solid red"
        pass.nextElementSibling.innerHTML = "!La contraseña debe tener al menos 6 caracteres";

    }else{
        pass.style.border = "1px solid green"
        pass.nextElementSibling.innerHTML = ""
        if(pass.value != r_pass.value){
            r_pass.style.border = "1px solid red"
            r_pass.nextElementSibling.innerHTML = "!Las contraseñas no coinciden";
        }else{
            r_pass.style.border = "1px solid green"
            r_pass.nextElementSibling.innerHTML = ""
            return true;
        }
    }
    return false;
}

function verificar(elemento = document.querySelector(),expresion,mensaje){
    if(!expresion.test(elemento.value)){
        elemento.style.border = "1px solid red"
        elemento.nextElementSibling.innerHTML = mensaje;
        return false;
     }else{
         elemento.style.border = "1px solid green"
         elemento.nextElementSibling.innerHTML = "";
         return true;
     }
}


document.querySelectorAll(".visible").forEach((boton,index)=>{
    boton.addEventListener("click",()=>{
        let input = document.querySelectorAll(".pass")[index]
        input.focus()
        let length = input.value.length
        let img = document.querySelectorAll(".visible img")[index]
        if(input.type === "password"){
            input.type = "text"
             img.src = "ojoNoVisible.svg"
        }else{
            input.type = "password"
            img.src = "ojoVisiblew.svg"
        }
         //input = document.querySelectorAll(".pass")[index]
         //input.setSelectionRange(length, length)
        setTimeout(()=>{input.setSelectionRange(length, length);},0)
    })
})


let nombre = localStorage.getItem("nombre")
let correo = localStorage.getItem("correo")



if(nombre){
    document.querySelector("#name").value = nombre
}
if(correo){
    document.querySelector("#email").value = correo
}