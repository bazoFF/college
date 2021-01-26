import { IOffer, IOfferRequest } from './offer';
import { IPerson } from './person';

export interface ILoan {
  offer: IOffer;
  person: IPerson;
}

export interface ILoanRequest extends ILoan{
  offerRequest: IOfferRequest;
}
