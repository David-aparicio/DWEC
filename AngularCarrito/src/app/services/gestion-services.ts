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
    const indice = this.itemsCarrito.findIndex(  // Buscar si el producto ya existe en el carrito
      item => item.sku === producto.sku
    );
        if (indice !== -1) {
      this.itemsCarrito[indice].cantidad += 1; // Si ya existe, aumentar la cantidad
        } else {
      // Si no existe, agregarlo con cantidad 1
      this.itemsCarrito.push(producto);
    }
  }

      getItems(): IlineaCompra[] {
          return this.itemsCarrito;
      }
  
}
