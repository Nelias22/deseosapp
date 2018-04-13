import { Component, OnInit } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx: number;
  lista: Lista;

  constructor(
    public _listaDeseos:ListaDeseosService,
    public navCtrl:NavController,
    public navParams:NavParams,
    public alertCtrl:AlertController
  ) {
      this.idx = this.navParams.get("i");
      this.lista = this.navParams.get("lista");
  }


  actualizar(item:ListaItem){
    item.completado = !item.completado;

    let todosMarcados = true;
    for (let item of this.lista.items) {
        if(!item.completado){
          todosMarcados = false;
          break;
        }
    }
    this.lista.completado = todosMarcados
    this._listaDeseos.actualizarData();

  }

  borrarItem() {
   let confirm = this.alertCtrl.create({
     title: 'Seguro que desea borrar esta lista?',
     message: 'Esta acción no se podrá revertir',
     buttons: ['Cancelar',
       {
         text: 'Eliminar',
         handler: () => {
           this._listaDeseos.eliminarLista(this.idx);
           this.navCtrl.pop();
         }
       }
     ]
   });
   confirm.present();
 }

  ngOnInit() {}
}
