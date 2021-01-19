import { IOffer, IOfferRequest } from './offer';
import { IPerson } from './person';

export interface ILoanRequest {
  offer: IOffer;
  offerRequest: IOfferRequest;
  person: IPerson;
}
