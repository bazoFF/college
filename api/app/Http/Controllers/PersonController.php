<?php

namespace App\Http\Controllers;

use App\Dto\Loan\BankDto;
use App\Dto\Loan\PersonDto;
use App\Models\Bank;
use App\Models\Person;

class PersonController extends Controller
{
    public function get()
    {
        return response()->json(array_values(
            Person::query()->get()
                ->map(fn(Person $bank) => PersonDto::createFromEntity($bank))
                ->toArray()
        ));
    }
}
