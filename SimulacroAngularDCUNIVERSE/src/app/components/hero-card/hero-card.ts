// hero-card.component.ts
import { Component, Input } from '@angular/core';
import { Ihero } from '../../interfaces/ihero';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {
  @Input() hero!: Ihero;


}