import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/producto-interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceProductos {
  
  private arrProductos: ProductoInterface[];
  private currency: string;

  constructor() {
    this.arrProductos = [];
    this.currency = '';

    fetch('http://localhost:8080/api/carrito')
    .then(response => response.json())
    .then(data => {
      this.currency = data.currency;
      data.products.forEach((producto: ProductoInterface) => {
        
        this.arrProductos.push(producto);
      });
    });
  }

  getProductos(): ProductoInterface[] {
    return this.arrProductos;
  }
  getCurrency(): string {
    return this.currency;
  }
}