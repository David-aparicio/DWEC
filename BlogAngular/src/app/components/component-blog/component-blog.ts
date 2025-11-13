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
        titulo: 'Descubren un planeta con tormentas de cristales',
        imagen: 'https://i.ytimg.com/vi/pEE7kpnZutA/maxresdefault.jpg',
        cuerpo:
          'Investigadores de la Nueva República han encontrado un planeta en el Borde Exterior donde las tormentas caen en forma de cristales luminosos.',
        Fecha: new Date(2025, 10, 11),
      },
      {
        id: 2,
        titulo:
          'Fernando Alonso gana la carrera de vainas.',
        imagen:
          'https://lh6.googleusercontent.com/proxy/ZueaMoMN5m0x8OV-1IiebG43NQZ2jeyiBA9OTDb7pSXFPziYzgtut_4A9z5L4usFZH3OTft_YzoixH7zJeIU-tLiAPwX8_9fvqNA0w4LG828P6hRvedWmRlKY477RBwjLkdxnCmNBPdyuDsCAF7D0kyyAeecK8iPeoWBfpKu7IOnHLO9d5m4bAo',
        cuerpo:
          'Fernando Alonso gana la ultima carrera de vainas, también llamadas carrera de pods. Una de las carreras más peligroas de la galaxia.',
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
    !this.nuevaNoticia.titulo || !this.nuevaNoticia.imagen || !this.nuevaNoticia.cuerpo || !this.nuevaNoticia.Fecha
  ) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Asigno el ID como el ultimo + 1 o 1 si la lista está vacía
  if (this.noticias.length > 0) {
    this.nuevaNoticia.id = this.noticias[this.noticias.length - 1].id + 1;
  } else {
    this.nuevaNoticia.id = 1;
  }

  // Agrego la noticia
  this.noticias.push({
    id: this.nuevaNoticia.id,
    titulo: this.nuevaNoticia.titulo,
    imagen: this.nuevaNoticia.imagen,
    cuerpo: this.nuevaNoticia.cuerpo,
    Fecha: this.nuevaNoticia.Fecha,
  });

  // Limpia el formulario
  this.nuevaNoticia = {
    id: 0,
    titulo: '',
    imagen: '',
    cuerpo: '',
    Fecha: new Date(),
  };

  console.log(this.noticias);
}

  eliminarNoticia(id: number) {
    this.noticias = this.noticias.filter(noticia => noticia.id !== id); //Con filter creo un nuevo array de this.noticias y con un arrow function
    console.log('Noticia eliminada:', this.noticias);                   // pego en el nuevo array todas las noticas menos la de ese id
  }
}
