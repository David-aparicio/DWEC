import { Component, inject, Input } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { ApiInterface } from '../../interfaces/api-interface';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-card-component',
  imports: [RouterLink],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent {
  sProductos = inject(ApiService);
  authService = inject(AuthService);

  @Input() producto!: ApiInterface;



  deleteSerie(producto: ApiInterface) {
        this.sProductos.deleteById(producto.id);
    }
  
}
