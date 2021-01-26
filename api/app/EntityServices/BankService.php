<?php

namespace App\EntityServices;

use App\Dto\Bank\BankDto;
use App\Models\Bank;

class BankService
{
    /** @return BankDto[] */
    public function getAll(): array
    {
        $banks = Bank::all()->map(fn(Bank $bank) => BankDto::create($bank));

        return array_values($banks->toArray());
    }
}
