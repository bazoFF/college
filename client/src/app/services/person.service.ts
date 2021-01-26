import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IBank } from '../models/bank';
import { IPerson } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient) {}

  get(): Observable<IPerson[]> {
    return this.http.get<IPerson[]>(`${environment.apiUrl}/admin/people`);
  }
}
