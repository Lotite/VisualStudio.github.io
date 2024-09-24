let dia = prompt("Ingrese Dia de cumpleaños")
let mes = prompt("ingrese mes de cumpleaños")
print = alert
let fecha = new Date("2024-11-28")
while(fecha.getFullYear()<2100 && fecha.getDay()!=0 ) fecha.setFullYear(fecha.getFullYear()+1);


print(`El año es ${fecha.getFullYear()} y el dia de la semana es ${fecha.getDay()}`)
