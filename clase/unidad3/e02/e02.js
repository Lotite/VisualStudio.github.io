let dia = 28
let mes = 11
print = console.log
let fecha = new Date("2024-11-28")
while(fecha.getFullYear()<2100 && fecha.getDay()!=0 ) fecha.setFullYear(fecha.getFullYear()+1);


print(`El año es ${fecha.getFullYear()} y el dia de la semana es ${fecha.getDay()}`)
