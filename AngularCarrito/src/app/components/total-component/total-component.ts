import { Component, inject } from '@angular/core';
import { GestionServices } from '../../services/gestion-services';
import { ServiceProductos } from '../../services/service-productos';
import { IlineaCompra } from '../../interfaces/ilinea-compra';

@Component({
  selector: 'app-total-component',
  imports: [],
  templateUrl: './total-component.html',
  styleUrl: './total-component.css',
})
export class TotalComponent {


  sCarrito = inject(GestionServices);
  sProductos = inject(ServiceProductos);
  moneda!: string;

  constructor() { }

  get productosEnCarrito(): IlineaCompra[] {
    return this.sCarrito.obtenerTodos();
  }

  calcularSubtotal(item: IlineaCompra): string {
    const subtotal = item.price * item.cantidad;
    return subtotal.toFixed(2);
  }

  obtenerTotal(): string {
    return this.sCarrito.obtenerTotal().toFixed(2);
  }

  vaciarCarrito(): void {
    this.sCarrito.vaciarCarrito();
  }

  ngOnInit() {
    setTimeout(() => {
      this.moneda = this.sProductos.getCurrency();
    },100);
  }
}