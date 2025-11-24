import { GestionServices } from './../../services/gestion-services';
import { Component, inject, Input} from '@angular/core';
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
  cantidad: number ;

  
  @Input() producto!: ProductoInterface;
  

  constructor() {
    this.cantidad = 0;
  }
  
    sumarCantidad() {
  // Aquí conviertes de ProductoInterface → IlineaCompra
  const productoCarrito: IlineaCompra = {
    sku: this.producto.sku,
    title: this.producto.title,
    price: parseFloat(this.producto.price), 
    cantidad: 1
  };
  
  this.sCarrito.agregarProducto(productoCarrito);
}

    restarCantidad(){}

  ngOnInit() {
    this.moneda = this.sProductos.getCurrency();
    
  }

}
