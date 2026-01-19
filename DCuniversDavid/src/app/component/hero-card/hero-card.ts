import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IHero } from '../../interfaces/i-hero';

@Component({
  selector: 'app-hero-card',
  imports: [CommonModule],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {


  @Input() heroe!: IHero;
  @Output() usuarioEliminado = new EventEmitter<string>()

 


  
}
