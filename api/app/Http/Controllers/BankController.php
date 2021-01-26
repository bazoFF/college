<?php

namespace App\Http\Controllers;

use App\Dto\Loan\BankDto;
use App\Models\Bank;

class BankController extends Controller
{
    public function get()
    {
        return response()->json(array_values(
            Bank::query()->get()
                ->map(fn(Bank $bank) => BankDto::createFromEntity($bank))
                ->toArray()
        ));
    }
}
