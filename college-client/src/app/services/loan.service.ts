import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { IOffer, IOfferRequest } from '../models/offer';
import { ILoanRequest } from '../models/loan-request';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private http: HttpClient) {}

  getOffers(dto: IOfferRequest): Observable<IOffer[]> {
    return this.http.post<IOffer[]>(`${environment.apiUrl}/offers`, dto);
  }

  loanRequest(dto: ILoanRequest): Observable<void> {
    return this.http.put<void>(`${environment.apiUrl}/loan-request`, dto);
  }
}
