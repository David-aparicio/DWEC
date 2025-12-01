import { Component, inject } from '@angular/core';
import { ApiInterface } from '../../interfaces/api-interface';
import { ApiService } from '../../services/api-service';
import { CardComponent } from "../../components/card-component/card-component";
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-list-card',
  imports: [CardComponent],
  templateUrl: './list-card.html',
  styleUrl: './list-card.css',
})
export class ListCard {

  arrProductos: ApiInterface [];
  authService = inject(AuthService);
  Sproductos = inject (ApiService);

  filtroCategoria: string = "";  // Variable que guarda la categoría seleccionada para filtrar

  constructor() {
    this.arrProductos = [];
  }
  
  get isAdmin(): boolean{
    return this.authService.isAdmin();
  }

   get productosFiltrados(): ApiInterface[] { // Getter que devuelve los productos filtrados según la categoría
    if (!this.filtroCategoria) return this.arrProductos;// Si no hay filtro seleccionado, devuelvo todos los productos
    return this.arrProductos.filter(p => p.category === this.filtroCategoria); // Si hay filtro, devuelvo solo los que coinciden en category
  }

  ngOnInit(): void{
    this.arrProductos = this.Sproductos.getProductos();
  }
}
