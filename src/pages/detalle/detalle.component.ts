import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
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
    public _listaDeseosService:ListaDeseosService,
    public alerta:AlertController
  ) {
    console.log(this.navParms);
  this.idx = this.navParms.get("idx");
  this.lista = this.navParms.get("lista");
  console.log(this.lista);
}

  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado = !item.completado
    let finish = true;
    for(let it of this.lista.items){
      if(!it.completado){
        finish = false;
        break;
      }
    }
    this.lista.terminada = finish;
    this._listaDeseosService.actualizarData();
  }

  borrarItem(){
    let alert = this.alerta.create({
      title: 'Aviso',
      message: '¿Desea eliminar la lista?',
      buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Si',
        handler: () => {
          this._listaDeseosService.borrarLista(this.idx);
          this.navCtrl.pop();
        }
      }
    ]
    });
    alert.present();

  }

}
