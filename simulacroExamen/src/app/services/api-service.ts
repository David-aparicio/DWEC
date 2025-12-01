import { Injectable } from '@angular/core';
import { ApiInterface } from '../interfaces/api-interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private arrProductos: ApiInterface[];  // Array donde se almacenarán todos los productos
  private id: number;  // Contador para asignar IDs a productos nuevos
  
  constructor() {
    this.arrProductos = [];
    this.id = 18;// ID inicial para los nuevos productos

    fetch("http://localhost:8080/api/products")    // Petición a la API al iniciar el servicio
            .then(response => response.json())
            .then(datos => {
                datos.forEach((element: any) => { // Guardamos cada producto recibido en el array local
                    let producto = element as ApiInterface;
                    this.arrProductos.push(producto);
                });
            });
  }

  getProductos(): ApiInterface[]{  // Devuelve todos los productos almacenados
    return this.arrProductos;
  }
  getByID(miId: number): ApiInterface{  // Busca un producto por ID
    let productos: ApiInterface;
    let response = this.arrProductos.find(i => i.id == miId);    // Busca el producto cuyo id coincida
    if(response != undefined){
      productos = response;    // Si existe lo devolvemos
    }else{
      productos = { // Si no existe devolvemos un producto "placeholder" indicando error
        id: -1,
        name: "error",
        description: "Producto no encontrado",

      }
    }
    return productos;
  }

      //Metodo para insertar producto
    insertProdct(producto: ApiInterface): void {
        if (!this.arrProductos.includes(producto) && producto != null) {    // Comprobamos que no está repetido y que no es null
            producto.id = this.id;
            this.arrProductos.push(producto);
            this.id++;
        }
    }

    actualizarProdct(producto: ApiInterface): void {
      let i = this.arrProductos.findIndex(p => p.id == producto.id);    // Busca el índice del producto con ese ID

        if (i != -1 && i >= 0 && i < this.arrProductos.length) { // Si existe, lo eliminamos primero
            this.arrProductos.splice(i, 1);
        }
        this.arrProductos.push(producto);    // Insertamos el producto actualizado
      }

      deleteById(id: number): void{
        let i = this.arrProductos.findIndex(p => p.id == id);    // Buscar el índice del producto a eliminar
        if (i != -1 && i >= 0 && i < this.arrProductos.length) {    // Si se encontró dentro del rango del array, lo borramos
            this.arrProductos.splice(i, 1);
          }
      }
}
