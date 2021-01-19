<?php

namespace App\EntityServices;

use App\Dto\Loan\BankDto;
use App\Dto\Loan\LoanRequestDto;
use App\Dto\Loan\OfferDto;
use App\Dto\Loan\OfferRequestDto;
use App\Dto\Loan\PersonDto;
use App\Models\Bank;
use App\Models\LoanRequest;
use App\Models\Person;

class LoanRequestService
{
    public function create(LoanRequestDto $dto)
    {
        $person = $this->createPerson($dto->person);

        $loanRequest = new LoanRequest();
        $loanRequest->bankId = $dto->offer->bank->id;
        $loanRequest->personId = $person->id;
        $loanRequest->price = $dto->offerRequest->price;
        $loanRequest->deposit = $dto->offerRequest->deposit;
        $loanRequest->duration = $dto->offerRequest->duration;
        $loanRequest->monthlyPayment = $dto->offer->monthlyPayment;

        $loanRequest->save();
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


}
