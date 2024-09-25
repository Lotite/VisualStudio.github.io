let dia = (new Date()).toString()
//op1
setTimeout(()=> {alert("Hoy es" + dia  )} , 2000 )
//op2
let a = setInterval(function() {alert("Hoy es" + dia  ); clearInterval(a) } , 4000 )