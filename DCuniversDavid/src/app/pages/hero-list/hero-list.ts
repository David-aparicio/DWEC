import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero-service';
import { IHero } from '../../interfaces/i-hero';
import { HeroCard } from "../../component/hero-card/hero-card";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hero-list',
  imports: [CommonModule, RouterLink, FormsModule, HeroCard],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {
  arrHeroes: IHero[] = [];
  shero = inject(HeroService);

  paginaActual: number = 1;
  totalPaginas: number = 1;
  totalHeroes: number = 0;
  heroesporpagina: number = 0;
  cargando: boolean = false;


  async cargarUsuarios(pagina: number): Promise<void>{
    this.cargando = true;

    try {
      const response = await this.shero.getCharacters(pagina);
      
      this.arrHeroes = response.content;
      this.totalHeroes = response.totalElements;
      this.heroesporpagina = response.;
      this.totalPaginas = response.totalPages;
      this.paginaActual = response.pageable.pageNumber;
      
      
      }catch(error){
      console.error('Error al obtener los usuarios:', error);  
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudieron cargar los usuarios',
      });
      }finally {
      // finally lo ejecuta SIEMPRE, haya error o no
      // Sin finally, si hay error el cargando quedaría en true para siempre
      this.cargando = false;
    }
    }
  

    async ngOnInit(): Promise<void> {
    await this.cargarUsuarios(1);
  }
}
