import { Component, inject, Input } from '@angular/core';
import { CardComponent } from '../../components/card-component/card-component';
import { Filter } from '../../components/filter/filter';
import { ApiInterface } from '../../interfaces/api-interface';
import { ApiService } from '../../services/api-service';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-list-card',
  imports: [CardComponent, Filter],
  templateUrl: './list-card.html',
  styleUrl: './list-card.css',
})
export class ListCard {
  arrProductos: ApiInterface[];
  authService = inject(AuthService);
  Sproductos = inject(ApiService);

  productosFiltrados: ApiInterface[] = [];
    filtroCategoria: string = "";
    filtroPrice: number = 0;
    

  constructor() {
    this.arrProductos = [];
  }

      cambiarFiltro(filtro: string) {
    this.filtroCategoria = filtro;
    this.actualizarFiltro();
  }
  cambiarFiltroPrice(filtro: number) {
    this.filtroPrice = filtro;
    this.actualizarFiltro();
  }

  actualizarFiltro(): void {
    if (!this.filtroCategoria) {
      this.productosFiltrados = this.arrProductos;
    } else {
      this.productosFiltrados = this.arrProductos.filter(p => p.category === this.filtroCategoria);
    }
    
  }

        onDeleted(name: string) {
      this.arrProductos = this.Sproductos.getProductos();
      this.actualizarFiltro();
    }

    ngOnInit(): void{
    this.arrProductos = this.Sproductos.getProductos();
      this.productosFiltrados = this.arrProductos;

  }
}
