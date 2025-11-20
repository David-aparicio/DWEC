import { Injectable } from '@angular/core';
import { IlineaCompra } from '../interfaces/ilinea-compra';
import { ProductoInterface } from '../interfaces/producto-interface';

@Injectable({
  providedIn: 'root',
})
export class GestionServices {
  
  private itemsCarrito: IlineaCompra[];

  constructor() {
    this.itemsCarrito = [];
  }

      agregarProducto(producto: IlineaCompra): void {
    // Buscar si el producto ya existe en el carrito
    const indice = this.itemsCarrito.findIndex(
      item => item.sku === producto.sku
    );

    // Si ya existe, aumentar la cantidad
    if (indice !== -1) {
      this.itemsCarrito[indice].cantidad += 1;
    } else {
      // Si no existe, agregarlo con cantidad 1
      this.itemsCarrito.push(producto);
    }
  }


  
}
