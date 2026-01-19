import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { HeroService } from '../../services/hero-service';
import { IHero } from '../../interfaces/i-hero';

@Component({
  selector: 'app-hero-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-view.html',
  styleUrl: './hero-view.css',
})
export class HeroView implements OnInit {
  hero: IHero | null = null;
  loading: boolean = false;
  heroId: number | null = null;

  constructor(
    private heroService: HeroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.heroId = +id;
        this.loadHero(this.heroId);
      } else {
        this.router.navigate(['/hero-list']);
      }
    });
  }

  // Cargar detalles del héroe
  loadHero(id: number): void {
    this.loading = true;
    this.heroService.getCharacterById(id)
      .then((response: any) => {
        this.hero = response;
        this.loading = false;
      })
      .catch((error) => {
        console.error('Error al cargar el personaje:', error);
        this.loading = false;
        alert('Error al cargar el personaje');
        this.router.navigate(['/hero-list']);
      });
  }

  // Eliminar héroe
  deleteHero(): void {
    if (!this.hero) return;
    
    if (confirm('¿Está seguro de que desea eliminar este personaje?')) {
      this.heroService.deleteCharacter(this.hero.id)
        .then(() => {
          alert('Personaje eliminado correctamente');
          this.router.navigate(['/hero-list']);
        })
        .catch((error) => {
          console.error('Error al eliminar:', error);
          alert('Error al eliminar el personaje');
        });
    }
  }

  // Volver al listado
  goBack(): void {
    this.router.navigate(['/hero-list']);
  }
}
