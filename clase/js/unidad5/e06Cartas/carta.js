import { rotar } from "./estilo.js";
document.querySelector(".carta").addEventListener("click",()=>{
    rotar(document.querySelector(".carta"),"pokemon.png")
})
