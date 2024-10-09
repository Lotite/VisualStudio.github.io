export class Disco{
    constructor(nombre,grupo,año,tipo,localizacion = 0,prestado = false,caratula = "imagen.png") {
        this.nombre = nombre;
        this.grupo = grupo;
        this.año = año;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = prestado;
        this.caratula = caratula;
    }

  setLocal(num){
    this.localizacion = num
  }
  setPresentado(estado){
    this.prestado = estado; 
  }

  imprimir(){
    return `nombre:${this.nombre},grupo:${this.grupo},año:${this.año},tipo:${this.tipo},localizacion:${this.localizacion},presentado:${this.prestado},caratula:${this.caratula}`;
  }


  getInfoArray(){
    return [this.nombre,this.grupo,this.año,this.tipo,this.localizacion ,this.prestado,this.caratula];
  }





}