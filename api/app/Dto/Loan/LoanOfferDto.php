<?php

namespace App\Dto\Loan;

use App\Dto\Bank\BankDto;

class LoanOfferDto
{
    public int $credit;
    public int $monthlyPayment;
    public int $neededSalary;
    public BankDto $bank;

    public static function create(array $fields): self
    {
        $dto = new self();
        $dto->bank = BankDto::create($fields['bank']);
        $dto->credit = $fields['credit'];
        $dto->monthlyPayment = $fields['monthlyPayment'];
        $dto->neededSalary = $fields['neededSalary'];

        return $dto;
    }
}
