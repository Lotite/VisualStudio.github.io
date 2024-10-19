document.querySelectorAll(".expandidor").forEach(titulo =>{
    titulo.addEventListener("click",()=>{
        if(titulo.getAttribute("mostrar")==="true"){
            titulo.setAttribute("mostrar","false")
        }else{
            titulo.setAttribute("mostrar","true")
        }
    })
})