import { Component, inject, OnInit } from '@angular/core';
import { NinjaService } from '../../services/ninja-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ininja } from '../../interfaces/ininja';
import { NinjaCard } from "../../components/ninja-card/ninja-card";

@Component({
  selector: 'app-ninja-list-component',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, NinjaCard],
  templateUrl: './ninja-list-component.html',
  styleUrl: './ninja-list-component.css',
})
export class NinjaListComponent implements OnInit{
  ninjaService = inject(NinjaService);

  ninjas: Ininja[] = [];
  ninjasFiltered: Ininja[] = [];

    // Información de paginación
  currentPage: number = 0; // Spring Boot empieza en 0
  totalPages: number = 0;
  totalElements: number = 0;
  isFirst: boolean = true;
  isLast: boolean = false;

  searchName: string = '';
  selectedGender: string = '';
  minNinjutsu: number = 1;
  aplicarFiltro: boolean = false;

   ngOnInit(): void {
    this.loadNinjas(this.currentPage);
  }

  async loadNinjas(page: number ) {
    try {
      const response = await this.ninjaService.getAllNinjas(page);
      this.ninjas = response.content;
      this.totalPages = response.totalPages;
      this.totalElements = response.totalElements;
      this.isFirst = response.first;
      this.isLast = response.last;
      this.currentPage = page;
    } catch (error) {
      console.error('Error cargando héroes:', error);
    }
  }

    // Ir a página específica
  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.loadNinjas(page);
    }
  }

    // Página anterior
  previousPage() {
    if (!this.isFirst) {
      this.loadNinjas(this.currentPage - 1);
    }
  }

    // Página siguiente
  nextPage() {
    if (!this.isLast) {
      this.loadNinjas(this.currentPage );
    }
  }

    // Generar array de páginas para el paginador
  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }

  applyFilters() {

this.ninjasFiltered = this.ninjas.filter(ninja => {
      // Filtro por nombre
      const matchesName = ninja.ninjaname.toLowerCase().includes(this.searchName.toLowerCase()) ||
                          ninja.fullname.toLowerCase().includes(this.searchName.toLowerCase());
      

      
      // Filtro por género
      const matchesGender = this.selectedGender === '' || ninja.gender === this.selectedGender;
      
      // Filtro por poder mínimo
      const matchesPower = ninja.stats.strength >= this.minNinjutsu;
      
      return matchesName  && matchesGender && matchesPower;
    });
    }
    
      
  

  resetFilters() {
    this.searchName = '';
    this.selectedGender = '';
    this.minNinjutsu = 0;
    this.applyFilters();
  }

  buscar() {
    this.aplicarFiltro = true;
  }
}
