let dia = prompt("Ingrese Dia de cumpleaños")
let mes = prompt("ingrese mes de cumpleaños")
let fecha = new Date()
fecha.setDate(dia)
fecha.setMonth(mes)
while(fecha.getFullYear()<2100 ) {
    if(fecha.getDay()==0) document.body.innerHTML+=fecha.getFullYear() + "<br/>"
    fecha.setFullYear(fecha.getFullYear()+1);}



