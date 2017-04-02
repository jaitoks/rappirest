"use strict";

class Matriz {
   /*Constructor*/ 
  constructor(){
    this.tamanio=0;
    this.operaciones =[];
    
  }
  
  
  /*Getters and Setters*/
  get getTamanio() {
    return this.tamanio;
  }

  set setTamanio(value) {
    this.tamanio = value;
  }

  get getOperaciones() {
    return this.operaciones;
  }

  set setOperaciones(value) {
    this.operaciones = value;
  }
}

export default Matriz ;