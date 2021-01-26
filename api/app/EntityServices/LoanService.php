<?php

namespace App\EntityServices;

use App\Dto\Bank\BankDto;
use App\Dto\Loan\LoanDto;
use App\Dto\Loan\LoanRequestDto;
use App\Dto\Loan\LoanOfferDto;
use App\Dto\Loan\LoanOfferRequestDto;
use App\Dto\Person\PersonDto;
use App\Models\Bank;
use App\Models\Loan;
use App\Models\Person;

class LoanService
{
    public function create(LoanRequestDto $dto)
    {
        $person = $this->createPerson($dto->person);

        $loan = new Loan();
        $loan->bankId = $dto->offer->bank->id;
        $loan->personId = $person->id;
        $loan->price = $dto->offerRequest->price;
        $loan->deposit = $dto->offerRequest->deposit;
        $loan->duration = $dto->offerRequest->duration;
        $loan->monthlyPayment = $dto->offer->monthlyPayment;

        $loan->save();

        return $loan;
    }

    public function getOffers(LoanOfferRequestDto $dto)
    {
        $banks = Bank::all();

        return $banks->map(fn (Bank $bank) => $this->mapOffer($bank, $dto));
    }

    public function getAll()
    {
        $loans = Loan::all()->map(fn(Loan $loan) => LoanDto::create($loan));

        return array_values($loans->toArray());
    }

    private function createPerson(PersonDto $dto): Person
    {
        $person = new Person();
        $person->lastName = $dto->lastName;
        $person->firstName = $dto->firstName;
        $person->middleName = $dto->middleName;
        $person->age = $dto->age;
        $person->salary = $dto->salary;
        $person->passportSeries = $dto->passportSeries;
        $person->passportNumber = $dto->passportNumber;
        $person->email = $dto->email;
        $person->phone = $dto->phone;

        $person->save();

        return $person;
    }

    private function mapOffer(Bank $bank, LoanOfferRequestDto $dto)
    {
        $offer = new LoanOfferDto();
        $offer->bank = BankDto::create($bank);
        $offer->credit = $dto->price - $dto->deposit;
        $offer->monthlyPayment = $offer->credit * (1 + $offer->bank->rate / 100) / ($dto->duration * 12);
        $offer->neededSalary = $offer->monthlyPayment * 1.5;

        return $offer;
    }
}
