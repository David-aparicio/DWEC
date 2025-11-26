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



  private buscarProducto(sku: string): IlineaCompra | undefined {
    return this.itemsCarrito.find(item => item.sku === sku);
  }

  //Agregar una unidad de un producto
  agregarProducto(producto: IlineaCompra): void {
    //const indice = this.itemsCarrito.findIndex(item => item.sku === producto.sku);
    const productoExistente = this.buscarProducto(producto.sku);
    if (productoExistente) {
      // Si ya existe, aumentar la cantidad 
      productoExistente.cantidad = productoExistente.cantidad + 1;
    } else {
      // Si no existe, agregarlo con cantidad 1
      this.itemsCarrito.push(producto);
    }
  }

  quitarProducto(sku: string): void {
    const productoExistente = this.buscarProducto(sku);

    if (productoExistente) {
      productoExistente.cantidad = productoExistente.cantidad - 1;

      if (productoExistente.cantidad == 0) {
        this.eliminarDelCarrito(sku);
      }
    }
  }
  eliminarDelCarrito(sku: string): void {
    this.itemsCarrito = this.itemsCarrito.filter(item => item.sku !== sku);
  }



  obtenerCantidad(sku: string): number {
    const producto = this.buscarProducto(sku);

    if (producto) {
      return producto.cantidad;
    } else {
      return 0;
    }
  }

  getItems(): IlineaCompra[] {
    return this.itemsCarrito;
  }

  obtenerTodos(): IlineaCompra[] {
    return this.itemsCarrito;
  }


  obtenerTotal(): number {
    let total = 0;

    for (let item of this.itemsCarrito) {
      const subtotal = item.price * item.cantidad;
      total = total + subtotal;
    }

    return total;
  }

  contarProductos(): number {
    let contador = 0;

    for (let item of this.itemsCarrito) {
      contador = contador + item.cantidad;
    }

    return contador;
  }

  vaciarCarrito(): void {
    this.itemsCarrito = [];
  }
}

