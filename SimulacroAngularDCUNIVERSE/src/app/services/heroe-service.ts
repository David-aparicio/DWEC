// heroe-service.ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IheroResponse } from '../interfaces/ihero-response';
import { Ihero } from '../interfaces/ihero';

@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  private baseURL: string = 'http://localhost:8080/api/characters';
  http = inject(HttpClient);

  constructor() {}

  // Obtener todos los héroes con paginación
  async getAllHeroes(page: number = 0): Promise<IheroResponse> {
    const resp = await lastValueFrom(
      this.http.get<IheroResponse>(this.baseURL + '?page=' + page)
    );
    return resp;
  }

  // Obtener héroe por ID
  getById(id: number): Promise<Ihero> {
    return lastValueFrom(this.http.get<Ihero>(`${this.baseURL}/${id}`));
  }

  // Crear héroe
  create(hero: Ihero): Promise<Ihero> {
    return lastValueFrom(this.http.post<Ihero>(this.baseURL, hero));
  }

  // Actualizar héroe
  update(id: number, hero: Ihero): Promise<Ihero> {
    return lastValueFrom(this.http.put<Ihero>(`${this.baseURL}/${id}`, hero));
  }

  // Eliminar héroe
  delete(id: number): Promise<void> {
    return lastValueFrom(this.http.delete<void>(`${this.baseURL}/${id}`));
  }
}