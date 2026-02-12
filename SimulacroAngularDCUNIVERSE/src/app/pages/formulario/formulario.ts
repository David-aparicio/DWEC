import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeroeService } from '../../services/heroe-service';
import { Ihero } from '../../interfaces/ihero';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario implements OnInit {
  heroService = inject(HeroeService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  heroForm: FormGroup;
  isNew: boolean = true;
  currentHeroId?: number;

  constructor() {
    this.heroForm = this.createForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id']; // 👈 CAMBIO: 'id' en vez de '_id'
      
      if (id !== undefined) {
        this.isNew = false;
        this.currentHeroId = Number(id);
        this.loadHero(id);
      }
    });
  }

  async loadHero(id: string) {
    try {
      const hero = await this.heroService.getById(Number(id));
      
      if (hero) {
        this.heroForm.patchValue({
          heroname: hero.heroname,
          fullname: hero.fullname,
          image1: hero.image1 || '',
          image2: hero.image2 || '',
          image3: hero.image3 || '',
          gender: hero.gender,
          race: hero.race,
          alignment: hero.alignment,
          powerstats: {
            intelligence: hero.powerstats?.intelligence ?? 0,
            strength: hero.powerstats?.strength ?? 0,
            speed: hero.powerstats?.speed ?? 0,
            durability: hero.powerstats?.durability ?? 0,
            power: hero.powerstats?.power ?? 0,
            combat: hero.powerstats?.combat ?? 0
          }
        });
      } else {
        alert('No se encuentra el héroe');
        this.router.navigate(['/heroes']);
      }
    } catch (error) {
      console.error('Error al cargar héroe:', error);
      alert('Error al cargar el héroe');
      this.router.navigate(['/heroes']);
    }
  }

  private createForm(): FormGroup {
    return new FormGroup({
      heroname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      fullname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      image1: new FormControl(''),
      image2: new FormControl(''),
      image3: new FormControl(''),
      gender: new FormControl('', [Validators.required]),
      race: new FormControl('', [Validators.required]),
      alignment: new FormControl('', [Validators.required]),
      powerstats: new FormGroup({
        intelligence: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
        strength: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
        speed: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
        durability: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
        power: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
        combat: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)])
      })
    });
  }

  async getDataForm() {
    if (this.heroForm.invalid) {
      alert('Por favor completa todos los campos correctamente');
      return;
    }

    // 👇 IMPORTANTE: Construir el objeto héroe correctamente
    const heroeData = this.heroForm.value;
    
    try {
      if (this.isNew) {
        // CREAR: No incluir ID
        await this.heroService.create(heroeData);
        alert('Héroe creado exitosamente');
      } else {
        // ACTUALIZAR: Incluir el ID en el objeto
        const heroeToUpdate: Ihero = {
          id: this.currentHeroId!, // 👈 Incluir el ID
          ...heroeData
        };
        
        await this.heroService.update(this.currentHeroId!, heroeToUpdate);
        alert('Héroe actualizado exitosamente');
      }

      this.heroForm.reset();
      this.router.navigate(['/heroes']);
    } catch (error) {
      console.error('Error guardando héroe:', error);
      alert('Error al guardar el héroe');
    }
  }

  onReset(): void {
    if (confirm('¿Estás seguro de que deseas resetear el formulario?')) {
      if (this.isNew) {
        this.heroForm.reset();
      } else {
        if (this.currentHeroId) {
          this.loadHero(this.currentHeroId.toString());
        }
      }
    }
  }
}