import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {
    this.cargardata();
    console.log("servicio inicializado");
  }

  actualizarData(){
    localStorage.setItem("data",JSON.stringify(this.listas));
  }

  cargardata(){
    if(localStorage.getItem("data")){
      this.listas = JSON.parse(localStorage.getItem("data"));
    }
  }

  agregarLista(lista:Lista){
    this.listas.push(lista);
    this.actualizarData();
  }

}
