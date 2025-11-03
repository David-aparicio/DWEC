import { ImageInterface } from './../../interfaces/image-interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-component',
  imports: [],
  templateUrl: './galeria-component.html',
  styleUrl: './galeria-component.css',
})
export class GaleriaComponent {

    arrayImagenes: ImageInterface[];
    imgagenActual: number;

    constructor(){
      this.imgagenActual = 0;
      this.arrayImagenes = [{
 
url: 'https://placehold.co/600x400/orange/white',
      title: 'Naranja',
      alt: 'soy un cuadrado naranja'
 
},
 
{
 
url: 'https://placehold.co/600x400/blue/white',
      title: 'Azul',
      alt: 'soy un cuadrado azul'
 
},
 
{
 
url: 'https://placehold.co/600x400/green/white',
      title: 'Verde',
      alt: 'soy un cuadrado verde'
 
},
 
{
 
url: 'https://placehold.co/600x400/red/white',
      title: 'Rojo',
      alt: 'soy un cuadrado rojo'
 
},
 
 
 
  ]
    }


    anterior(): void {
      this.imgagenActual--;
      if(this.imgagenActual < 0){
        this.imgagenActual = this.arrayImagenes.length - 1;
      }
    }

    siguiente(): void{
      this.imgagenActual++;
      if(this.imgagenActual >= this.arrayImagenes.length){
        this.imgagenActual = 0;
      }
    }
}
