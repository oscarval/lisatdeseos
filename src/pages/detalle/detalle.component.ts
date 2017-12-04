import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista } from '../../app/clases/listas';
import { ListaItem } from '../../app/clases/lista-item';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista:Lista;

  constructor(
    public navCtrl: NavController,
    public navParms: NavParams,
    public _listaDeseosService:ListaDeseosService
  ) {
    console.log(this.navParms);
  this.idx = this.navParms.get("idx");
  this.lista = this.navParms.get("lista");
}

  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado = !item.completado
    this._listaDeseosService.actualizarData();
  }

  borrarItem(){
    this._listaDeseosService.borrarLista(this.idx);
    this.navCtrl.pop();
  }

}
