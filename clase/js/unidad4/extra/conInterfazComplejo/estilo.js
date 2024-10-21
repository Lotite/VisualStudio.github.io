
export function render(){

    document.querySelectorAll(".expandidor").forEach(titulo => {
        titulo.addEventListener("click", () => {
            if (titulo.getAttribute("mostrar") === "true") {
                titulo.setAttribute("mostrar", "false")
            } else {
                titulo.setAttribute("mostrar", "true")
            }
        })


        



    })
    
}


export function crearPuerta(num,propietario) {
    return `<div class="puertas cursor-click" numero="${num}">
                        <p class="centrar-Texto"><b>Puerta ${num + 1}</b></p>
                        <input class="inputNombrePuertas sinBordes input-tansparente-blanco" type="text" value="${propietario}" placeholder="Sin dueño">
                    </div>`
}

export function crearAñadirPuerta() {
    return `<div class="puertas addPuertas cursor-click" >
                <p class="centrar-Texto"><b>Añadir Puerta</b></p>
                <input class="sinBordes input-tansparente-blanco inputAddPuerta" edificio="0" planta="0" type="text" placeholder="Sin dueño"/>
                <button class="boton " edificio="0" planta="0">Añadir</button>
            </div>`
}



export function crearPlanta(num) {
    return `<div class="plantas contraer redondear my " numero="${num}">
                <p class="colorAzulClarito expandidor" mostrar="false">Planta ${num+1}</p>
                <div class="plantas-contenedor"></div>
            </div>`
}
export function crearAñadirPlanta(){
    return `<div  class="plantas addPlanta my redondear justify-content-wrap">
                <b class="colorAzul">Añadir Planta:</b>
                <input type="text" class="inputPlantas" placeholder="plantas">
                <input type="text" class="inputPuertas" placeholder="Puertas">
                <button class="boton">añadir</button>
            </div>`
}

export function crearEdificio(num,text){
    return `<div class="edificios mx my contraer redondear " numero="${num}">
                <h2 class="edificio-Titulo expandidor " mostrar="false">${text}</h2>
                <div class="edificio-contenedor">
                    <p class="colorAzul"><b>Plantas</b></p>
                    
                    </div>
                </div>
            </div>`
}


document.getElementById("img2").addEventListener("click",()=>{
    document.getElementById("notificacion").style.display = "none"
})

export function notificacion(tipo,mensaje){
    let notificacion = document.getElementById("notificacion")
    if(tipo=="exito"){
        document.getElementById("img1").setAttribute("src","exito.svg")
        notificacion.style.backgroundColor = "rgb(130, 182, 52)"
        notificacion.querySelector("span").innerHTML = `<b>Exito <br> ${mensaje}</b>`
    }else{
        document.getElementById("img1").setAttribute("src","alerta.svg")
        notificacion.style.backgroundColor = "rgb(255, 48, 48)"
        notificacion.querySelector("span").innerHTML = `<b>Error <br> ${mensaje}</b>`
    }
    notificacion.style.display = "flex";
}