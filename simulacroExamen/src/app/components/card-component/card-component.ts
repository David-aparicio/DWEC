import { Component, inject, Input } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { ApiInterface } from '../../interfaces/api-interface';

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent {
  sProductos = inject(ApiService);

  @Input() producto!: ApiInterface;

  
}
