print = alert
let txt = "";
let patron = /(DOC|025P)([01][0-9][0-9]|2([0-4][0-9]|5[012]))[ABC]/

let input = document.getElementById("input")
let b = document.getElementById("button")
b.addEventListener("click",()=>{
    txt = input. ;
    if(patron.test(txt)){
        print(getIp()+txt.substring(3,6))
    }else{
        print("El texto no sigue los criterios")
    }
})



function getIp() {
    switch (txt.charAt(txt.length - 1)) {
        case "A":
            return "10.42.68."
            break;
        case "B":
            return "10.42.69."
            break;
        case "C":
            return "10.52.178."
            break;
    }
}


