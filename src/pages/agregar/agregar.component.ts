import { Component, OnInit } from '@angular/core';
import { Lista } from '../../app/clases/listas';
import { ListaItem } from '../../app/clases/lista-item';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista:string = "";
  nombreItem:string = "";

  items:ListaItem[] = [];

  constructor(public alertCtrl: AlertController,
              public navCrtl: NavController,
              public _listaDeseos: ListaDeseosService
  ) {  }

  ngOnInit() {}

  agregar(){
    if(this.nombreItem.length == 0){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;
    this.items.push( item );
    this.nombreItem = "";

  }

  borrar(idx:number){
    console.log(idx);
    this.items.splice(idx,1);
  }

  guardarLista(){
    if(this.nombreLista.length == 0 ){
      let alert = this.alertCtrl.create({
        title: 'Aviso',
        subTitle: 'El nombre de la lista es obligatorio',
        buttons: ['Aceptar']
      });
      alert.present();
      return;
    }
    let ListaNueva = new Lista(this.nombreLista);
    ListaNueva.items = this.items;
    // this._listaDeseos.listas.push( ListaNueva );
    this._listaDeseos.agregarLista(ListaNueva)
    this.nombreLista = "";
    this.navCrtl.pop();

  }


}
