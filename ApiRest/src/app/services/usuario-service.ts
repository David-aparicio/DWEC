import { Iapi } from './../interfaces/iapi';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iusuario } from '../interfaces/iusuario';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  
    private baseURL: string = 'https://peticiones.online/api/users';
    httpClient = inject(HttpClient);


    constructor(){}


    async getAllUsers(page: number = 1): Promise<Iapi> {  
      
      const resp = await lastValueFrom(this.httpClient.get<Iapi>(`${this.baseURL}?page= ${page}`)); 
      // Realiza la petición HTTP GET y espera la respuesta tipada como Iapi
      return resp;// Ahora devolvemos todo el objeto Iapi, no solo results
    }


    async eliminarUsuarioID(_id: string): Promise<Iusuario> { // Método asíncrono que recibe un id de usuario 
      return lastValueFrom(this.httpClient.delete<Iusuario>(`${this.baseURL}/${_id}`)); // Realiza la petición HTTP DELETE para eliminar el usuario por su id
    }


    async getByID(_id: String): Promise<Iusuario>{ 
      return lastValueFrom(this.httpClient.get<Iusuario>(this.baseURL + '/' + _id)); 
    }
  }
































