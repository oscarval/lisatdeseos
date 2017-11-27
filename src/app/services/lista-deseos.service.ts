import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {
  constructor() {
    let lista1 = new Lista("Compras de supermercado");
    let lista2 = new Lista("Juegos que deseos");
    console.log("servicio inicializado");
  }
}
