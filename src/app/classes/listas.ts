import {ListaItem} from './lista-item';
export class Lista{
  nombre:string;
  items:ListaItem[];
  completado:boolean;

  constructor(nombre:string){
    this.nombre = nombre;
    this.completado = false;
  }
}
