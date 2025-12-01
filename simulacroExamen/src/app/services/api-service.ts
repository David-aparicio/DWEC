import { Injectable } from '@angular/core';
import { ApiInterface } from '../interfaces/api-interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private arrProductos: ApiInterface[];
  private id: number;
  
  constructor() {
    this.arrProductos = [];
    this.id = 18;

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
  getByID(miId: number): ApiInterface{
    let productos: ApiInterface;
    let response = this.arrProductos.find(i => i.id == miId);
    if(response != undefined){
      productos = response;
    }else{
      productos = {
        id: -1,
        name: "error",
        description: "Producto no encontrado",

      }
    }
    return productos;
  }

      //Metodo para insertar producto
    insertProdct(producto: ApiInterface): void {
        if (!this.arrProductos.includes(producto) && producto != null) {
            producto.id = this.id;
            this.arrProductos.push(producto);
            this.id++;
        }
    }

    actualizarProdct(producto: ApiInterface): void {
      let i = this.arrProductos.findIndex(p => p.id == producto.id);

        if (i != -1 && i >= 0 && i < this.arrProductos.length) {
            this.arrProductos.splice(i, 1);
        }
        this.arrProductos.push(producto);
      }

      deleteById(id: number): void{
        let i = this.arrProductos.findIndex(p => p.id == id);
        if (i != -1 && i >= 0 && i < this.arrProductos.length) {
            this.arrProductos.splice(i, 1);
          }
      }
}
