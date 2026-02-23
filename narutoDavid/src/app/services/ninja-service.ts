import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IninjaResponse } from '../interfaces/ininja-response';
import { lastValueFrom } from 'rxjs';
import { Ininja } from '../interfaces/ininja';

@Injectable({
  providedIn: 'root',
})
export class NinjaService {
   private baseURL: string = 'http://localhost:8080/api/ninjas';
  http = inject(HttpClient);

  constructor() {}

    async getAllNinjas(page: number = 0): Promise<IninjaResponse> {
    const resp = await lastValueFrom(
      this.http.get<IninjaResponse>(this.baseURL + '?page=' + page)
    );
    return resp;
  }


  getById(id: number): Promise<Ininja> {
    return lastValueFrom(this.http.get<Ininja>(`${this.baseURL}/${id}`));
  }


  create(ninja: Ininja): Promise<Ininja> {
    return lastValueFrom(this.http.post<Ininja>(this.baseURL, ninja));
  }


  update( ninja: Ininja): Promise<Ininja> {
    return lastValueFrom(this.http.put<Ininja>(this.baseURL , ninja));
  }


  delete(id: number): Promise<void> {
    return lastValueFrom(this.http.delete<void>(`${this.baseURL}/${id}`));
  }
}
