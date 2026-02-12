// heroes-view.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeroeService } from '../../services/heroe-service';
import { Ihero } from '../../interfaces/ihero';

@Component({
  selector: 'app-heroes-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './heroes-view.html',
  styleUrl: './heroes-view.css'
})
export class HeroesView implements OnInit {
  
  heroService = inject(HeroeService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  
  hero: Ihero | null = null;
  currentImageIndex: number = 0;
  
  ngOnInit(): void {
    this.loadHero();
  }
  
  async loadHero() {
    const id = this.activatedRoute.snapshot.params['id'];
    
    try {
      this.hero = await this.heroService.getById(id);
    } catch (error) {
      console.error('Error cargando héroe:', error);
      alert('Error al cargar el héroe');
      this.router.navigate(['/home']);
    }
  }
  
  // Obtener imágenes válidas
  get images(): string[] {
    if (!this.hero) return [];
    
    const imgs = [this.hero.image1, this.hero.image2, this.hero.image3]
      .filter(img => img && img.trim() !== '');
    
    return imgs.length > 0 ? imgs : ['https://via.placeholder.com/600x400'];
  }
  
  // Navegación del carousel
  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.images.length - 1;
    }
  }
  
  nextImage() {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }
  
  goToImage(index: number) {
    this.currentImageIndex = index;
  }
  
  // Acciones
  editHero() {
    this.router.navigate(['/formulario', this.hero?.id]);
  }
  
  async deleteHero() {
    if (!this.hero) return;
    
    const confirmed = confirm(`¿Estás seguro de eliminar a ${this.hero.heroname}?`);
    
    if (confirmed) {
      try {
        await this.heroService.delete(this.hero.id);
        alert('Héroe eliminado correctamente');
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Error eliminando héroe:', error);
        alert('Error al eliminar el héroe');
      }
    }
  }
  
  goBack() {
    this.router.navigate(['/home']);
  }
}