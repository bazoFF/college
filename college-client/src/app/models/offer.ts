export interface IOfferGetRequest {
    price: number;
    deposit: number;
    duration: number;
}

export interface IOffer {
    bankName: string;
    credit: number;
    monthlyPayment: number;
    mortgageRate: number;
    neededSalary: number;
}
