// Reutilizando el archivo de arrays de la práctica 1
import * as arrays from './array.js';
import {Disco} from './discos.js'
let discos = [];

while(true) {
    let opcion = prompt(`
        Selecciona una opción:
        1. Mostrar número de discos
        2. Mostrar tabla de discos con todos los datos
        3. Mostrar un intervalo de discos por año de publicación
        4. Añadir un disco
        5. Borrar un disco
        6. Consultar un disco
    `);
    
    switch (opcion) {
        case "1":
            arrays.mostrarNumero(discos);
            break;
        case "2":
            let opcionMostrar = prompt(`
                ¿Cómo quieres mostrar los discos?
                1. En el orden que se encuentran
                2. Del revés
                3. Ordenados alfabéticamente
            `);
            discos = arrays.ordenar(discos, opcionMostrar, (a, b) => a.nombre.localeCompare(b.nombre));
            discos.forEach(disco => alert(disco.mostrarInformacion()));
            break;
        case "3":
            let intervalo = prompt("Introduce el intervalo de años en formato inicio-fin (por ejemplo: 1980-1990)");
            let [inicio, fin] = intervalo.split('-').map(Number);
            let discosEnIntervalo = discos.filter(disco => disco.año >= inicio && disco.año <= fin);
            discosEnIntervalo.forEach(disco => alert(disco.mostrarInformacion()));
            break;
        case "4":
            let nombre = prompt("Introduce el nombre del disco:");
            let grupo = prompt("Introduce el grupo o cantante:");
            let año = prompt("Introduce el año de publicación:");
            let tipo = prompt("Introduce el tipo de música (rock, pop, punk, indie):");
            let localizacion = prompt("Introduce la localización del disco:");
            let prestado = confirm("¿Está prestado?");
            let caratula = prompt("Introduce el nombre del archivo de la carátula (por defecto es 'imagen.png'):");
            let nuevoDisco = new Disco(nombre, grupo, año, tipo, localizacion, prestado, caratula);
            let opcionAñadir = prompt("¿Dónde quieres añadir el disco? 1. Al principio 2. Al final");
            arrays.añadir(discos, opcionAñadir, nuevoDisco);
            break;
        case "5":
            let opcionBorrar = prompt("¿Dónde quieres borrar el disco? 1. Al principio 2. Al final");
            discos = arrays.eliminar(discos, opcionBorrar, disco => disco.mostrarInformacion());
            break;
        case "6":
            let opcionConsultar = prompt("¿Cómo quieres consultar el disco? 1. Por posición 2. Por nombre");
            if (opcionConsultar === "1") {
                let posicion = prompt("Introduce la posición:");
                alert(discos[Number(posicion) - 1].mostrarInformacion());
            } else {
                let nombreDisco = prompt("Introduce el nombre del disco:");
                let discoEncontrado = discos.find(disco => disco.nombre === nombreDisco);
                if (discoEncontrado) {
                    alert(discoEncontrado.mostrarInformacion());
                } else {
                    alert("Disco no encontrado.");
                }
            }
            break;
        default:
            alert("Opción no válida.");
    }
}


