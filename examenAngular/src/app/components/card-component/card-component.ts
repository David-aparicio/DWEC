import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { AuthService } from '../../services/auth-service';
import { ApiInterface } from '../../interfaces/api-interface';
import { RouterLink } from '@angular/router';

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
  @Output() deleted = new EventEmitter<string>();   

    deleteProducto(producto: ApiInterface) {
        this.sProductos.deleteByname(producto.name)
        this.deleted.emit(this.producto.name);           
    }


  }
