import { Injectable } from '@angular/core';
import { ApiInterface } from '../interfaces/api-interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private arrProductos: ApiInterface[];
  private idd: number;

  constructor() {
     this.arrProductos = [];
    this.idd = 18;

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

      getProductId(id: string): ApiInterface | undefined {
        return this.arrProductos.find(s => s.id === id);

    }

  getByID(miId: string): ApiInterface{  
    let productos: ApiInterface;
    let response = this.arrProductos.find(i => i.id == miId);    
    if(response != undefined){
      productos = response;    
    }else{
      productos = { 
        id_: -1,
        name: "error",
        description: "Producto no encontrado",

      }
    }
    return productos;
  }

    insertProdct(producto: ApiInterface): void {
        if (!this.arrProductos.includes(producto) && producto != null) {    
            producto.id_ = this.idd;
            producto.id = crypto.randomUUID()
            this.arrProductos.push(producto);
            this.idd++;
        }
    }




    actualizarProdct(producto: ApiInterface): void {
      let i = this.arrProductos.findIndex(p => p.id_ == producto.id_);    // Busca el índice del producto con ese ID
      producto.id = this.arrProductos[i].id;
        if (i != -1 && i >= 0 && i < this.arrProductos.length) { // Si existe, lo eliminamos primero
            this.arrProductos.splice(i, 1);
        }
        this.arrProductos.push(producto);    // Insertamos el producto actualizado
      }

      deleteByname(name: string): void{
        let i = this.arrProductos.findIndex(producto => producto.name == name);
        if (i != -1 && i >= 0 && i < this.arrProductos.length) {
            this.arrProductos.splice(i, 1);
        }
      }


  
}
