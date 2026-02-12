// heroes-list.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroeService } from '../../services/heroe-service';
import { Ihero } from '../../interfaces/ihero';
import { HeroCard } from '../../components/hero-card/hero-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroCard, FormsModule],
  templateUrl: './heroes-list.html',
  styleUrl: './heroes-list.css'
})
export class HeroesList implements OnInit {
  
  heroService = inject(HeroeService);
  
  heroes: Ihero[] = [];
    heroesFiltered: Ihero[] = [];
  
  // Información de paginación
  currentPage: number = 0; // Spring Boot empieza en 0
  totalPages: number = 0;
  totalElements: number = 0;
  isFirst: boolean = true;
  isLast: boolean = false;
  
    // Filtros
  searchName: string = '';
  selectedAlignment: string = '';
  selectedGender: string = '';
  minPower: number = 0;

  
  ngOnInit(): void {
    this.loadHeroes(this.currentPage);
  }
  
  async loadHeroes(page: number = 0) {
    try {
      const response = await this.heroService.getAllHeroes(page);
      this.heroes = response.content;
      this.totalPages = response.totalPages;
      this.totalElements = response.totalElements;
      this.isFirst = response.first;
      this.isLast = response.last;
      this.currentPage = page; // Guardamos la página actual
    } catch (error) {
      console.error('Error cargando héroes:', error);
    }
  }
  
  // Ir a página específica
  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.loadHeroes(page);
    }
  }
  
  // Página anterior
  previousPage() {
    if (!this.isFirst) {
      this.loadHeroes(this.currentPage - 1);
    }
  }
  
  // Página siguiente
  nextPage() {
    if (!this.isLast) {
      this.loadHeroes(this.currentPage + 1);
    }
  }
  
    applyFilters() {
    this.heroesFiltered = this.heroes.filter(hero => {
      // Filtro por nombre
      const matchesName = hero.heroname.toLowerCase().includes(this.searchName.toLowerCase()) ||
                          hero.fullname.toLowerCase().includes(this.searchName.toLowerCase());
      
      // Filtro por alineación
      const matchesAlignment = this.selectedAlignment === '' || hero.alignment === this.selectedAlignment;
      
      // Filtro por género
      const matchesGender = this.selectedGender === '' || hero.gender === this.selectedGender;
      
      // Filtro por poder mínimo
      const matchesPower = hero.powerstats.power >= this.minPower;
      
      return matchesName && matchesAlignment && matchesGender && matchesPower;
    });
      
  }

    // Resetear filtros
  resetFilters() {
    this.searchName = '';
    this.selectedAlignment = '';
    this.selectedGender = '';
    this.minPower = 0;
    this.applyFilters();
  }
  
  // Generar array de páginas para el paginador
  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }
}