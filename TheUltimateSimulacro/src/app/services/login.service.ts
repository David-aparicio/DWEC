import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser } from '../interfaces/iuser';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpClient = inject(HttpClient);
    private baseUrl: string = 'https://dummyjson.com/auth/';

    constructor() { }

    login(iuser: Iuser): Promise<any> {
        return lastValueFrom(this.httpClient.post<any>(this.baseUrl + "login", iuser));
    }
}
