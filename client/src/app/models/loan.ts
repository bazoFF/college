import { IOffer, IOfferRequest } from './offer';
import { IPerson } from './person';
import { IBank } from './bank';

export interface ILoan extends IOfferRequest {
  monthlyPayment: number;
  bank: IBank | string;
  person: IPerson | string;
}

export interface ILoanRequest {
  offer: IOffer;
  person: IPerson;
  offerRequest: IOfferRequest;
}
