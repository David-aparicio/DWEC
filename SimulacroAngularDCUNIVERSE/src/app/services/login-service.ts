import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Ilogin } from '../interfaces/ilogin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpClient = inject(HttpClient);
    private baseUrl: string = 'http://localhost:8080/api/login';

    constructor() { }

    login(user: Ilogin): Promise<any> {
        return lastValueFrom(this.httpClient.post<any>(this.baseUrl, user));
    }
}
