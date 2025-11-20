import { GestionServices } from './../../services/gestion-services';
import { Component, inject, Input} from '@angular/core';
import { ServiceProductos } from '../../services/service-productos';
import { ProductoInterface } from '../../interfaces/producto-interface';

import { IlineaCompra } from '../../interfaces/ilinea-compra';

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent {


  sProductos = inject(ServiceProductos);
  sCarrito = inject(GestionServices);
  moneda!: string;
  cantidad: number ;

  productoCarrito! : IlineaCompra;
  
  @Input() producto!: ProductoInterface;
  

  constructor() {
    this.cantidad = 0;
  }
  
    sumarCantidad() {
      this.cantidad += 1;
      this.productoCarrito.cantidad = this.cantidad;
      this.productoCarrito.price = Number(this.producto.price);

      this.sCarrito.agregarProducto(this.productoCarrito);
      
    }

    restarCantidad() {
    
    }

  ngOnInit() {
    this.moneda = this.sProductos.getCurrency();
  }

}
