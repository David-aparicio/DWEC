import { GestionServices } from './../../services/gestion-services';
import { Component, inject, Input } from '@angular/core';
import { ServiceProductos } from '../../services/service-productos';
import { ProductoInterface } from '../../interfaces/producto-interface';

import { IlineaCompra } from '../../interfaces/ilinea-compra';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-component',
  imports: [FormsModule],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent {


  sProductos = inject(ServiceProductos);
  sCarrito = inject(GestionServices);
  moneda!: string;


  @Input() producto!: ProductoInterface;


  get cantidadEnCarrito(): number {
    return this.sCarrito.obtenerCantidad(this.producto.sku);
  }

  sumarCantidad() {
    const productoCarrito: IlineaCompra = {
      sku: this.producto.sku,
      title: this.producto.title,
      price: parseFloat(this.producto.price),
      cantidad: 1
    };

    this.sCarrito.agregarProducto(productoCarrito);
  }

  restarCantidad() {
    this.sCarrito.quitarProducto(this.producto.sku);
  }

  calcularTotal(): number {
    const precio = parseFloat(this.producto.price);
    return precio * this.cantidadEnCarrito;
  }
  ngOnInit() {
    this.moneda = this.sProductos.getCurrency();

  }

}
