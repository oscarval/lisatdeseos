import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor(
    private _listasDeseos:ListaDeseosService,
    private navCtrl:NavController
  ) {  }

  ngOnInit() {}

  verDetalle(lista:any,idx:number){
    this.navCtrl.push(DetalleComponent,{lista,idx});
  }
}
