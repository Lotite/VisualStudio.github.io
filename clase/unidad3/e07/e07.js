let dia = (new Date()).toString()
setTimeout(()=> {alert("Hoy es" + dia  )} , 2000 )
let a = setInterval(function() {alert("Hoy es" + dia  ); clearInterval(a) } , 4000 )