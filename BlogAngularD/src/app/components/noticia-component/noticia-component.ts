import { Component } from '@angular/core';

@Component({
  selector: 'app-noticia-component',
  imports: [],
  templateUrl: './noticia-component.html',
  styleUrl: './noticia-component.css',
})
export class NoticiaComponent {
  titulo : String;
  imagen : String;
  cuerpo : String;

  constructor() {
    this.titulo = "";
    this.imagen = "";
    this.cuerpo = "";
    

  }

}
