import { IBank } from './bank';

export interface IOfferRequest {
  price: number;
  deposit: number;
  duration: number;
}

export interface IOffer {
  bank: IBank;
  credit: number;
  monthlyPayment: number;
  neededSalary: number;
}
