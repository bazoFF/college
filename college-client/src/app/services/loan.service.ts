import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { IOffer, IOfferGetRequest } from '../models/offer';
import { ILoanRequest } from '../models/loan-request';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private http: HttpClient) {}

  getOffers(dto: IOfferGetRequest): Observable<IOffer[]> {
    // return of([
    //   {
    //     bankName: 'Cбербанк',
    //     credit: 123456,
    //     monthlyPayment: 20000,
    //     mortgageRate: 0.08,
    //     neededSalary: 30000
    //   },
    //   {
    //     bankName: 'Альфа-Банк',
    //     credit: 123456,
    //     monthlyPayment: 21000,
    //     mortgageRate: 0.07,
    //     neededSalary: 30000
    //   },
    //   {
    //     bankName: 'Тинькофф',
    //     credit: 123456,
    //     monthlyPayment: 21000,
    //     mortgageRate: 0.07,
    //     neededSalary: 30000
    //   },
    //   {
    //     bankName: 'Банк ВТБ',
    //     credit: 123456,
    //     monthlyPayment: 21000,
    //     mortgageRate: 0.07,
    //     neededSalary: 30000
    //   },
    //   {
    //     bankName: 'Райффайзенбанк',
    //     credit: 123456,
    //     monthlyPayment: 21000,
    //     mortgageRate: 0.07,
    //     neededSalary: 30000
    //   }
    // ]);
    return this.http.post<IOffer[]>(`${environment.apiUrl}/offers`, dto);
  }

  loanRequest(dto: ILoanRequest): Observable<void> {
    return of(null);
    // return this.http.put<void>(`${environment.apiUrl}/loan-request`, dto);
  }
}
