import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../../services/hero-service';
import { HeroCard } from '../../component/hero-card/hero-card';
import { IHero } from '../../interfaces/i-hero';

@Component({
  selector: 'app-hero-gallery',
  imports: [CommonModule, FormsModule, HeroCard],
  templateUrl: './hero-gallery.html',
  styleUrl: './hero-gallery.css',
})
export class HeroGallery {
  heroes: IHero[] = [];
  filteredHeroes: IHero[] = [];
  loading: boolean = false;
  searchTerm: string = '';
  page: number = 0;
  size: number = 12;
  totalPages: number = 0;
  alignmentFilter: string = 'all';

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  

  /*ngOnInit(): void {
    this.loadCharacters();
  }
  loadCharacters(): void {
    this.loading = true;
    this.heroService.getCharacters(this.page, this.size)
      .then((response: any) => {
        this.heroes = response.content || response;
        this.applyFilters();
        this.loading = false;
      })
      .catch((error) => {
        console.error('Error al cargar personajes:', error);
        this.loading = false;
      });
  }

  // Aplicar filtros
  applyFilters(): void {
    this.filteredHeroes = this.heroes.filter((hero) => {
      const matchesSearch =
        hero.heroName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        hero.fullName.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesAlignment =
        this.alignmentFilter === 'all' ||
        hero.alignment.toLowerCase().includes(this.alignmentFilter.toLowerCase());

      return matchesSearch && matchesAlignment;
    });
  }

  // Buscar por nombre
  searchHeroes(): void {
    this.applyFilters();
  }

  // Cambiar filtro de alineación
  changeAlignmentFilter(alignment: string): void {
    this.alignmentFilter = alignment;
    this.applyFilters();
  }

  // Manejadores de eventos del hero-card
  onHeroDelete(heroId: number): void {
    if (confirm('¿Está seguro de que desea eliminar este personaje?')) {
      this.heroService.deleteCharacter(heroId)
        .then(() => {
          alert('Personaje eliminado correctamente');
          this.loadCharacters();
        })
        .catch((error) => {
          console.error('Error al eliminar:', error);
          alert('Error al eliminar el personaje');
        });
    }
  }

  onHeroEdit(heroId: number): void {
    this.router.navigate(['/hero-form', heroId]);
  }

  onHeroView(heroId: number): void {
    this.router.navigate(['/hero-view', heroId]);
  }

  // Limpiar búsqueda
  clearSearch(): void {
    this.searchTerm = '';
    this.alignmentFilter = 'all';
    this.applyFilters();
  }

  // Paginación
  nextPage(): void {
    this.page++;
    this.loadCharacters();
  }

  previousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadCharacters();
    }
  }

  // Crear nuevo personaje
  createNewHero(): void {
    this.router.navigate(['/hero-form']);
  }
    */
}
