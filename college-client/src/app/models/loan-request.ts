import { IOffer } from './offer';

export interface ILoanRequest {
  offer: IOffer;
  lastName: string;
  firstName: string;
  middleName: string;
  age: number;
  salary: number;
  passportSeries: string;
  passportNumber: string;
  email: string;
  phone: string;
}
