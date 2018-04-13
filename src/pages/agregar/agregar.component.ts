import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import {AlertController, NavController} from 'ionic-angular';
@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {
  nombreLista:string ="";
  nombreItem:string ="";

  items:ListaItem[] = [];

  constructor(public alertCtrl:AlertController,
              public navCtrl:NavController,
              public _listaDeseos:ListaDeseosService ) {  }


    agregar(){
      if( this.nombreItem.length == 0 ){
          return;
      }

      let item = new ListaItem();
      item.nombre = this.nombreItem

      this.items.push(item);
      this.nombreItem = "";

    }

    borrar(i:number){
        this.items.splice(i,1);
    }

    guardarLista(){

      if (this.nombreLista.length == 0){
        let alert = this.alertCtrl.create({
          title:"Lista sin nombre!",
          subTitle: "El nombre de la lista es necesario!",
          buttons: ['OK']
        });

        alert.present();
        return;
      }
      if (this.items.length == 0){
        let alert = this.alertCtrl.create({
          title:"No hay Items!",
          subTitle: "La lista está vacía!",
          buttons: ['OK']
        });

        alert.present();
        return;
      }

      let lista = new Lista(this.nombreLista);
      lista.items = this.items;

      // this._listaDeseos.listas.push(lista);
      this._listaDeseos.agregarLista(  lista );
      this.navCtrl.pop();

    }

  ngOnInit() {}
}
