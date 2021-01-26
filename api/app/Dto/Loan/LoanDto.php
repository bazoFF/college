<?php

namespace App\Dto\Loan;

use App\Models\Bank;
use App\Models\Loan;
use App\Models\Person;

class LoanDto
{
    public int $monthlyPayment;
    public int $price;
    public int $deposit;
    public int $duration;
    public string $bank;
    public string $person;

    public static function create(Loan $loan)
    {
        $dto = new self();
        $dto->monthlyPayment = $loan->monthlyPayment;
        $dto->price = $loan->price;
        $dto->deposit = $loan->deposit;
        $dto->duration = $loan->duration;
        $dto->bank = Bank::find($loan->bankId)->name;
        $dto->person = Person::find($loan->personId)->getFullName();

        return $dto;
    }
}
