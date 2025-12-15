import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iusuario } from '../interfaces/iusuario';
import { lastValueFrom } from 'rxjs';
import { Iapi } from '../interfaces/iapi';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  
    private baseURL: string = 'https://peticiones.online/api/users';
    httpClient = inject(HttpClient);

   
   
   


    constructor(){}


    async getAllUsers(): Promise<Iusuario[]> {        // Método asíncrono que me devuelve una promesa de un array de Iusuario
      const resp = await lastValueFrom(this.httpClient.get<Iapi>(this.baseURL)); // Realiza la petición HTTP GET y espera la respuesta tipada como Iapi
      return resp.results; // Devuelve el array de usuarios que se llama results
    }


    async eliminarUsuarioID(_id: string): Promise<Iusuario> { // Método asíncrono que recibe un id de usuario 
      return lastValueFrom(this.httpClient.delete<Iusuario>(`${this.baseURL}/${_id}`)); // Realiza la petición HTTP DELETE para eliminar el usuario por su id
    }


    async getByID(_id: String): Promise<Iusuario>{ 
      return lastValueFrom(this.httpClient.get<Iusuario>(this.baseURL + '/' + _id)); 
    }
  }
































