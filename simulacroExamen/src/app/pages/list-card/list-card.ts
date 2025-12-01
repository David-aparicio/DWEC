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

  productosFiltrados: ApiInterface[] = []; 
  filtroCategoria: string = "";

  constructor() {
    this.arrProductos = [];
  }
  
  get isAdmin(): boolean{
    return this.authService.isAdmin();
  }

   actualizarFiltro(): void {
    // Si no hay filtro seleccionado, mostramos todos los productos
    if (!this.filtroCategoria) {
      this.productosFiltrados = this.arrProductos;
    } else {
      // Si hay filtro, mostramos solo los que coinciden en category
      this.productosFiltrados = this.arrProductos.filter(p => p.category === this.filtroCategoria);
    }
  }

  ngOnInit(): void{
    this.arrProductos = this.Sproductos.getProductos();
    this.productosFiltrados = this.arrProductos;
  }
}
