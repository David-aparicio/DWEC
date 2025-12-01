import { Component, inject } from '@angular/core';
import { ApiInterface } from '../../interfaces/api-interface';
import { ApiService } from '../../services/api-service';
import { CardComponent } from "../../components/card-component/card-component";
import { AuthService } from '../../services/auth-service';
import { Filter } from "../../components/filter/filter";

@Component({
  selector: 'app-list-card',
  imports: [CardComponent, Filter],
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
  
    cambiarFiltro(filtro: string) {
    this.filtroCategoria = filtro;
    this.actualizarFiltro();
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

  onDeleted(id: number) {
  // Actualizar el array original
  this.arrProductos = this.Sproductos.getProductos();

  // Volver a aplicar el filtro
  this.actualizarFiltro();
}
  ngOnInit(): void{
    this.arrProductos = this.Sproductos.getProductos();
    this.productosFiltrados = this.arrProductos;
  }
}
