import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IBank } from '../models/bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IBank[]> {
    return this.http.get<IBank[]>(`${environment.apiUrl}/admin/banks`);
  }
}
