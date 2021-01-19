<?php

namespace App\Http\Controllers;

use App\Dto\Loan\BankDto;
use App\Models\Bank;

class BankController extends Controller
{
    public function get()
    {
        return array_values(
            Bank::query()->get()
                ->map(fn(Bank $bank) => BankDto::createFromEntity($bank))
                ->toArray()
        );
    }
}
