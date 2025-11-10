import { InterfaceNoticias } from './../../interfaces/interface-noticias';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-blog',
  imports: [],
  templateUrl: './component-blog.html',
  styleUrl: './component-blog.css',
})
export class ComponentBlog {

  noticias: InterfaceNoticias [];

  constructor(){
    this.noticias = [
    {
      titulo:'Detectan una señal de radio desde el 3I/ATLAS: ¿Qué significa este hallazgo?',
      imagen:'https://content.nationalgeographic.com.es/medio/2025/11/10/3i-atlas_d079d699_251110105339_1280x996.webp',
      cuerpo:'El telescopio sudafricano MeerKAT ha captado líneas de absorción de hidroxilo (OH) en el cometa 3I/ATLAS, el visitante de otro sistema estelar que acaba de rozar el Sol.',
      Fecha: new Date(2025, 10, 11)
    },
    {
      titulo:'China presenta un coche eléctrico que obtiene 500 km de autonomía en solo 99 segundos',
      imagen:'https://images.ecestaticos.com/KNZQqWorx9FqobrDb7CklVa-XH0=/181x0:1013x624/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F299%2Ff96%2F472%2F299f96472aac1fff66bfc4b1e9e1cc5b.jpg',
      cuerpo:'El Aion UT Super, desarrollado por GAC Group junto a CATL y JD.com, ha llamado la atención de todo el sector de la movilidad eléctrica. Principalmente, porque utiliza un sistema que permite intercambiar su batería en solo 99 segundos. Una cifra similar a la que se tarda en llenar un depósito de gasolina o diésel de un vehículo de combustión convencional. Además, su autonomía ronda los 500 kilómetros y su precio solo puede definirse como low cost.',
      Fecha: new Date(2025, 10, 11)
    }
  ]
  }
  agregarNoticia() : void{
    this.noticias.push({titulo: '', imagen:'', cuerpo: '', Fecha:new Date()})
  }
}
