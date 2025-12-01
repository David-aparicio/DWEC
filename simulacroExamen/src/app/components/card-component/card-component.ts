import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
  @Output() deleted = new EventEmitter<number>();   // ← Evento al padre


  deleteSerie(producto: ApiInterface) {
        this.sProductos.deleteById(producto.id);
        this.deleted.emit(this.producto.id);            // ← Avisar al padre
    }
  
}
