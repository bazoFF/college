import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IOffer, IOfferRequest } from '../models/offer';
import { ILoan, ILoanRequest } from '../models/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private http: HttpClient) {}

  getOffers(dto: IOfferRequest): Observable<IOffer[]> {
    return this.http.post<IOffer[]>(`${environment.apiUrl}/loans/offers`, dto);
  }

  loanRequest(dto: ILoanRequest): Observable<void> {
    return this.http.put<void>(`${environment.apiUrl}/loans`, dto);
  }

  getAll(): Observable<ILoan[]> {
    return this.http.get<ILoan[]>(`${environment.apiUrl}/admin/loans`);
  }
}
