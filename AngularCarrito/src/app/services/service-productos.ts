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
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el JSON');
      }
      return response.json();
    })
    .then(data => {
          this.arrProductos.push(data.products);
          this.currency = data.currency;
  })
    .catch(error => console.error(error));
}

  getProductos(): ProductoInterface[] {
    return this.arrProductos;
  }
  getCurrency(): string {
    return this.currency;
  }
}