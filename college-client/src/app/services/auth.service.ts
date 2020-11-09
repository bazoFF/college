import { Injectable } from '@angular/core';
import { ICredentials } from '../models/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials: ICredentials) {
    return this.http.post<Observable<string>>(`${environment.apiUrl}/auth/login`, credentials);
  }
}
