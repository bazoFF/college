import { Injectable } from '@angular/core';
import { ICredentials } from '../models/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get isLoggedIn(): boolean {
    return !!this.token;
  }

  get token(): string {
    return window.localStorage.getItem('JWT_TOKEN');
  }

  constructor(private http: HttpClient) { }

  login(credentials: ICredentials): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/auth/login`, credentials);
  }
}
