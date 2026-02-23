import { NinjaService } from './../../services/ninja-service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ininja } from '../../interfaces/ininja';

@Component({
  selector: 'app-ninja-view-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './ninja-view-component.html',
  styleUrl: './ninja-view-component.css',
})
export class NinjaViewComponent {
ninjaService = inject(NinjaService);
activatedRoute = inject(ActivatedRoute);
router = inject(Router);

ninja: Ininja | null = null;
currentImageIndex: number = 0;

  ngOnInit(): void {
    this.loadNinja();
  }

  async loadNinja() {
    const id = this.activatedRoute.snapshot.params['id'];
    
    try {
      this.ninja = await this.ninjaService.getById(id);
    } catch (error) {
      console.error('Error cargando ninja:', error);
      alert('Error al cargar el ninja');
      this.router.navigate(['/home']);
    }
  }

   get images(): string[] {
    if (!this.ninja) return [];
    
    const imgs = [this.ninja.image1, this.ninja.image2]
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
    this.router.navigate(['/formulario', this.ninja?.id]);
  }

  async deleteHero() {
    if (!this.ninja) return;
    
    const confirmed = confirm(`¿Estás seguro de eliminar a ${this.ninja.ninjaname}?`);
    
    if (confirmed) {
      try {
        await this.ninjaService.delete(this.ninja.id);
        alert('Ninja eliminado correctamente');
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Error eliminando ninja:', error);
        alert('Error al eliminar el ninja');
      }
    }
  }
  
  goBack() {
    this.router.navigate(['/home']);
  }

}
