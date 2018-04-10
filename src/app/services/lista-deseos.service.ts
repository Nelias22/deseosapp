import { Injectable } from '@angular/core';
import {Lista} from "../classes/listas";

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {

        let lista1 = new Lista("Lista supermercado");
        let lista2 = new Lista("Lista juegos");
        let lista3 = new Lista("Lista universidad");

        this.listas.push(lista1);
        this.listas.push(lista2);
        this.listas.push(lista3);

        console.log("servicio inicializado");
   }
}
