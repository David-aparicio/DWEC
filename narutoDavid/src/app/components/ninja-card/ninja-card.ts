import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ininja } from '../../interfaces/ininja';

@Component({
  selector: 'app-ninja-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './ninja-card.html',
  styleUrl: './ninja-card.css',
})
export class NinjaCard {
@Input() ninja!: Ininja
}
