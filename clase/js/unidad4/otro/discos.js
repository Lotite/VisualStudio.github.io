export class Disco {
    constructor(nombre, grupo, año, tipo, localizacion = 0, prestado = false, caratula = 'imagen.png') {
        this.nombre = nombre;
        this.grupo = grupo;
        this.año = año;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = prestado;
        this.caratula = caratula;
    }

    cambiarLocalizacion(nuevaLocalizacion) {
        this.localizacion = nuevaLocalizacion;
    }

    cambiarPrestado(nuevoEstado) {
        this.prestado = nuevoEstado;
    }

    mostrarInformacion() {
        return `
            Nombre del Disco: ${this.nombre}
            Grupo o Cantante: ${this.grupo}
            Año de Publicación: ${this.año}
            Tipo de Música: ${this.tipo}
            Localización: ${this.localizacion}
            Prestado: ${this.prestado ? "Sí" : "No"}
            Carátula: ${this.caratula}
        `;
    }
}

