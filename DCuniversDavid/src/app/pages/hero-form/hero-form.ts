import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { HeroService } from '../../services/hero-service';
import { IHero } from '../../interfaces/i-hero';

@Component({
  selector: 'app-hero-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-form.html',
  styleUrl: './hero-form.css',
})
export class HeroForm implements OnInit {
  hero: IHero = {
    id: 0,
    heroName: '',
    fullName: '',
    image1: '',
    image2: '',
    image3: '',
    gender: '',
    race: '',
    alignment: ''
  };

  editMode: boolean = false;
  loading: boolean = false;
  heroId: number | null = null;

  constructor(
    private heroService: HeroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtener el ID de los parámetros de la ruta
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.heroId = +id;
        this.editMode = true;
        this.loadHero(this.heroId);
      }
    });
  }

  // Cargar héroe para edición
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

  // Guardar héroe (crear o actualizar)
  saveHero(): void {
    if (!this.validateForm()) {
      alert('Por favor, completa todos los campos requeridos');
      return;
    }

    this.loading = true;

    const savePromise = this.editMode
      ? this.heroService.updateCharacter(this.hero)
      : this.heroService.createCharacter(this.hero);

    savePromise
      .then(() => {
        const message = this.editMode
          ? 'Personaje actualizado correctamente'
          : 'Personaje creado correctamente';
        alert(message);
        this.router.navigate(['/hero-list']);
      })
      .catch((error) => {
        console.error('Error al guardar:', error);
        alert('Error al guardar el personaje');
        this.loading = false;
      });
  }

  // Validar formulario
  validateForm(): boolean {
    return (
      this.hero.heroName.trim() !== '' &&
      this.hero.fullName.trim() !== '' &&
      this.hero.gender.trim() !== '' &&
      this.hero.race.trim() !== '' &&
      this.hero.alignment.trim() !== ''
    );
  }

  // Cancelar y volver al listado
  cancel(): void {
    this.router.navigate(['/hero-list']);
  }

  // Limpiar formulario
  clearForm(): void {
    this.hero = {
      id: 0,
      heroName: '',
      fullName: '',
      image1: '',
      image2: '',
      image3: '',
      gender: '',
      race: '',
      alignment: '',
    };
  }
}
