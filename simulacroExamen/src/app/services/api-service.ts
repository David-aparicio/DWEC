import { Injectable } from '@angular/core';
import { ApiInterface } from '../interfaces/api-interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private arrProductos: ApiInterface[];

  constructor() {
    this.arrProductos = [];

    fetch("http://localhost:8080/api/products")
            .then(response => response.json())
            .then(datos => {
                datos.forEach((element: any) => {
                    let producto = element as ApiInterface;
                    this.arrProductos.push(producto);
                });
            });
  }

  getProductos(): ApiInterface[]{
    return this.arrProductos;
  }
}
