navigator.geolocation.getCurrentPosition(siHayExito)

function siHayExito(posicion){
	var latitud = posicion.coords.latitude
	var longitud = posicion.coords.longitude
	var output = document.getElementById("ubicacion");
	alert("Latitud: "+latitud+"  Longitud: "+longitud);
}



