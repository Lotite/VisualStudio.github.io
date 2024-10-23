import { Edificio } from "../edificios.js";
let htmlSalida = '<h1>Información de Edificios</h1>';

// Edificio A
const edificioA = new Edificio('Garcia Prieto', '58', '15706');
htmlSalida += `<h2>Edificio A</h2>`;
htmlSalida += `<p>${edificioA.imprimirMensaje()}</p>`;
htmlSalida += `<p>El código postal del edificio A es: ${edificioA.imprimeCodigoPostal()}.</p>`;

htmlSalida += `<p>Agregamos 2 plantas y 3 puertas por planta al edificio A...</p>`;
edificioA.agregarPlantasYPuertas(2, 3);


htmlSalida += `<p>Agregamos 4 propietarios al edificio A...</p>`;
edificioA.agregarPropietario('Jose Antonio Lopez', 0, 0);
htmlSalida += `<p>${edificioA.imprimirMensaje()}</p>`;
edificioA.agregarPropietario('Luisa Martinez', 0, 1);
htmlSalida += `<p>${edificioA.imprimirMensaje()}</p>`;
edificioA.agregarPropietario('Marta Castellón', 0, 2);
htmlSalida += `<p>${edificioA.imprimirMensaje()}</p>`;
edificioA.agregarPropietario('Antonio Pereira', 1, 1);
htmlSalida += `<p>${edificioA.imprimirMensaje()}</p>`;

edificioA.agregarPlantasYPuertas(1, 3);
htmlSalida += `<p>Agregamos 1 planta más al edificio A...</p>`;

htmlSalida += `<p>Agregamos 1 propietario más al edificio A planta 3, puerta 2...</p>`;
edificioA.agregarPropietario('Pedro Meijide', 2, 1);
htmlSalida += `<p>${edificioA.imprimirMensaje()}</p>`;
htmlSalida += `<h3>Listado de propietarios del edificio ${edificioA.imprimirDatos()}</h3>`
htmlSalida += edificioA.imprimePlantas();


// Edificio B
const edificioB = new Edificio('Camino Caneiro', '29', '32004');
htmlSalida += `<h2>Edificio B</h2>`;
htmlSalida += `<p>${edificioB.imprimirMensaje()}</p>`;
htmlSalida += `<p>El edificio B está situado en la calle ${edificioB.imprimeCalle()} número ${edificioB.imprimeNumero()}.</p>`;

// Edificio C
const edificioC = new Edificio('San Clemente', 's/n', '15705');
htmlSalida += `<h2>Edificio C</h2>`;
htmlSalida += `<p>${edificioC.imprimirMensaje()}</p>`;
htmlSalida += `<p>La calle del edificio C es: ${edificioC.imprimeCalle()}.</p>`;

document.getElementById('salida').innerHTML = htmlSalida;
