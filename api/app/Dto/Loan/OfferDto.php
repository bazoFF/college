<?php

namespace App\Dto\Loan;

class OfferDto
{
    public static function create(array $fields): self
    {
        $dto = new self();
        $dto->bank = BankDto::create($fields['bank']);
        $dto->credit = $fields['credit'];
        $dto->monthlyPayment = $fields['monthlyPayment'];
        $dto->neededSalary = $fields['neededSalary'];

        return $dto;
    }

    public BankDto $bank;

    public int $credit;

    public int $monthlyPayment;

    public int $neededSalary;
}
