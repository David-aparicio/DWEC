import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Iapi } from '../interfaces/iapi';
import { Iproducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private httpClient = inject(HttpClient);
  private baseUri: string = 'https://dummyjson.com/products';
}

// Lo que NECESITAS:
export class ProductService {
  private httpClient = inject(HttpClient);
  private baseUri: string = 'https://dummyjson.com/products';

  // Obtener todos los productos
  getAll(): Promise<Iapi> {
    return lastValueFrom(
      this.httpClient.get<Iapi>(this.baseUri)
    );
  }

  // Obtener un producto por ID
  getById(id: number): Promise<Iproducto> {
    return lastValueFrom(
      this.httpClient.get<Iproducto>(`${this.baseUri}/${id}`)
    );
  }

  // Crear producto
  create(producto: Iproducto): Promise<Iproducto> {
    return lastValueFrom(
      this.httpClient.post<Iproducto>(this.baseUri + '/add', producto)
    );
  }

  // Actualizar producto
  update(id: number, producto: Iproducto): Promise<Iproducto> {
    return lastValueFrom(
      this.httpClient.put<Iproducto>(`${this.baseUri}/${id}`, producto)
    );
  }

  // Eliminar producto
  delete(id: number): Promise<any> {
    return lastValueFrom(
      this.httpClient.delete(`${this.baseUri}/${id}`)
    );
  }
}