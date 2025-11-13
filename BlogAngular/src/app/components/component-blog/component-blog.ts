import { DatePipe } from '@angular/common';
import { InterfaceNoticias } from './../../interfaces/interface-noticias';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-blog',
  imports: [DatePipe, FormsModule],
  templateUrl: './component-blog.html',
  styleUrls: ['./component-blog.css'],
})
export class ComponentBlog {
  noticias: InterfaceNoticias[];
  id: number = 0;

  constructor() {
    this.noticias = [
      {
        id: 1,
        titulo: 'Detectan una señal de radio desde el 3I/ATLAS: ¿Qué significa este hallazgo?',
        imagen: 'https://content.nationalgeographic.com.es/medio/2025/11/10/3i-atlas_d079d699_251110105339_1280x996.webp',
        cuerpo:
          'El telescopio sudafricano MeerKAT ha captado líneas de absorción de hidroxilo (OH) en el cometa 3I/ATLAS, el visitante de otro sistema estelar que acaba de rozar el Sol.',
        Fecha: new Date(2025, 10, 11),
      },
      {
        id: 2,
        titulo:
          'China presenta un coche eléctrico que obtiene 500 km de autonomía en solo 99 segundos',
        imagen:
          'https://images.ecestaticos.com/KNZQqWorx9FqobrDb7CklVa-XH0=/181x0:1013x624/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F299%2Ff96%2F472%2F299f96472aac1fff66bfc4b1e9e1cc5b.jpg',
        cuerpo:
          'El Aion UT Super, desarrollado por GAC Group junto a CATL y JD.com, ha llamado la atención del sector. Permite intercambiar su batería en solo 99 segundos, con una autonomía de 500 km y precio low cost.',
        Fecha: new Date(2025, 10, 11),
      },
    ];
  }

  nuevaNoticia: InterfaceNoticias = {
    id: 0,
    titulo: '',
    imagen: '',
    cuerpo: '',
    Fecha: new Date(),
  };

  agregarNoticia(): void {
    if (
      this.nuevaNoticia.titulo === '' ||
      this.nuevaNoticia.imagen === '' ||
      this.nuevaNoticia.cuerpo === ''
    ) {
      alert('Campos sin rellenar');
    } else {
      this.nuevaNoticia.id =
        this.noticias.length > 0
          ? Math.max(...this.noticias.map(n => n.id)) + 1
          : 1;

      this.noticias.push({ ...this.nuevaNoticia });

      this.nuevaNoticia = {
        id: 0,
        titulo: '',
        imagen: '',
        cuerpo: '',
        Fecha: new Date(),
      };

      console.log(this.noticias);
    }
  }

  eliminarNoticia(id: number) {
    this.noticias = this.noticias.filter(noticia => noticia.id !== id);
    console.log('Noticia eliminada:', this.noticias);
  }
}
