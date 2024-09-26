let date = new Date;
print = alert;
let date1 = new Date("2025/06/22")
let dias = (date1.getTime() - date.getTime())/1000/3600/24
print(`Quedan ${dias.toFixed(0)} dias`);
