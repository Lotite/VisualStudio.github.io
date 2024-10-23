/*
Queremos hacer una aplicación en JavaScript para gestionar edificios con la información de la situación del edificio y de los propietarios 
de cada piso. Para ello queremos almacenar la siguiente información de cada edificio:

calle.
número.
código postal.
plantas del edificio (dentro de cada planta tendremos un número de puertas y para cada puerta almacenaremos el nombre del propietario).
Se pide:

Crear un objeto que nos permita instanciar edificios. Cada vez que instanciemos un edificio le pasaremos la calle, número y 
código postal como parámetros. Se pide además crear los siguientes métodos para el objeto Edificio:
agregarPlantasYPuertas(numplantas, puertas) // Se le pasa el número de plantas que queremos crear en el piso y el número 
de puertas por planta. Cada vez que se llame a este método, añadirá el número de plantas y puertas indicadas en los parámetros, a las que ya están creadas en el edificio.
modificarNumero(numero) // Se le pasa el nuevo número del edificio para que lo actualice.
modificarCalle(calle) // Se le pasa el nuevo nombre de la calle para que lo actualice.
modificarCodigoPostal(codigo) // Se le pasa el nuevo número de código postal del edificio.
imprimeCalle                // Devuelve el nombre de la calle del edificio.
imprimeNumero                // Devuelve el número del edificio.
imprimeCodigoPostal       // Devuelve el código postal del edificio.
agregarPropietario(nombre,planta,puerta) // Se le pasa un nombre de propietario, un número de planta y un número de puerta y lo asignará como propietario de ese piso.
imprimePlantas // Recorrerá el edificio e imprimirá todos los propietarios de cada puerta.
Cada vez que se crea un edificio que muestre automáticamente un mensaje del estilo:
construido nuevo edificio en calle: xxxxxx, nº: xx, CP: xxxxx.
Cada vez que se añada un propietario a un piso de un edificio que muestre un mensaje del estilo:
xxxxxxxx es ahora el propietario de la puerta x de la planta x.
Aquí se muestra un ejemplo de lo que tendría que mostrar la aplicación:

*/

export class Edificio{
    constructor(calle,numero,cp){
        this.calle = calle;
        this.numero = numero;
        this.cp = cp
        this.plantas = []
        this.mensaje =  `construido nuevo edificio en calle: ${this.imprimeCalle()}, nº: ${this.imprimeNumero()}, CP: ${this.imprimeCodigoPostal()}.` 
        
    }
    imprimirMensaje(){
        return(this.mensaje)
    }
    modificarNumero(numero){
        this.numero = numero;
    }

    modificarCalle(calle){
        this.calle = calle;
    }

    modificarCodigoPostal(codigo){
        this.cp = codigo;
    }

    imprimeCalle(){
        return this.calle
    }
    imprimeNumero(){
        return this.numero
    }
    imprimeCodigoPostal(){
        return this.cp
    }



    agregarPlantasYPuertas(numplantas, puertas){
        for (let i = 0; i < numplantas; i++) {
            let planta = [];
            for (let j = 0; j < puertas; j++) {
                planta.push("Sin propietario")
            }
            this.plantas.push(planta)
        }
    }

 

    agregarPropietario(nombre,planta,puerta){
        let text = "La error en al introducir el numero de la puerta o el piso"
        if(planta<this.plantas.length && puerta<this.plantas[planta].length){
            this.plantas[planta][puerta] = nombre;
            this.mensaje =  `${nombre} es ahora el propietario de la puerta ${puerta + 1} de la planta ${planta + 1}.`
        }
    }

    imprimePlantas(){
        let text = "";
        this.plantas.forEach((planta,numPlanta)=>{
            planta.forEach((puerta,numPuerta)=>{
                text += `<p>Propietario del piso ${numPuerta} de la planta ${numPlanta}: ${puerta}.</p>`
            })
        })
        return text;
    }

       //extra
    imprimirDatos(){
        return this.imprimeCalle() +" " + this.imprimeNumero() + " " + this.imprimeCodigoPostal();
    }

    agregarPuerta(planta,propietario="Sin propietario"){
        if(planta < this.plantas.length ) this.plantas[planta].push(propietario)
    }

}