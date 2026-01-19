import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ILogin } from '../interfaces/i-login';
import { IHero } from '../interfaces/i-hero';
import { IApi } from '../interfaces/i-api';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private httpClient = inject(HttpClient);
  private baseUri: string = 'http://localhost:8080/api';

  constructor() {}

  login(user: ILogin): Promise<any>{
    return lastValueFrom(this.httpClient.post<any>(`${this.baseUri}/login`, user));
  }

  getCharacters(pageNumber: number = 0, pageSize: number = 100): Promise<any> {
    let params = new HttpParams().set('pageNumber', pageNumber.toString()).set('pageSize', pageSize.toString());
    return lastValueFrom( 
      this.httpClient.get<any>(`${this.baseUri}/characters`, { params })
    );
  }
/*
  async getAllUsers(page: number = 0): Promise<IApi> {  
      const resp = await lastValueFrom(this.httpClient.get<IApi>(this.baseUri + '/characters' + '?page=' + page)); 
      return resp;
    }
*/

  getCharacterById(id: number): Promise<any> {
    return lastValueFrom(
      this.httpClient.get<any>(`${this.baseUri}/characters/${id}`)
    );
  }


  searchCharactersByName(heroName: string, page: number = 0, size: number = 100): Promise<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return lastValueFrom(
      this.httpClient.get<any>(`${this.baseUri}/characters/name/${heroName}`, { params })
    );
  }

  createCharacter(character: IHero): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(`${this.baseUri}/characters`, character)
    );
  }

  updateCharacter(character: IHero): Promise<any> {
    return lastValueFrom(
      this.httpClient.put<any>(`${this.baseUri}/characters`, character)
    );
  }

  deleteCharacter(id: number): Promise<any> {
    return lastValueFrom(
      this.httpClient.delete<any>(`${this.baseUri}/characters/${id}`)
    );
  }


  getPowerStatsGreaterThan(value: number, page: number = 0, size: number = 100): Promise<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return lastValueFrom(
      this.httpClient.get<any>(`${this.baseUri}/powerstats/power/${value}`, { params })
    );
  }

  getCharactersPowerGreaterThan(value: number, page: number = 0, size: number = 100): Promise<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return lastValueFrom(
      this.httpClient.get<any>(`${this.baseUri}/characters/power/${value}`, { params })
    );
  }
}
