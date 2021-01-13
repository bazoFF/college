<?php

namespace App\Dto\Loan;

use App\Models\Bank;

class BankDto
{
    public static function create(array $fields): self
    {
        $dto = new self();
        $dto->id = $fields['id'];
        $dto->name = $fields['name'];
        $dto->rate = $fields['rate'];

        return $dto;
    }

    public static function createFromEntity(Bank $bank): self
    {
        $dto = new self();
        $dto->id = $bank->id;
        $dto->name = $bank->name;
        $dto->rate = $bank->rate;

        return $dto;
    }


    public int $id;

    public string $name;

    public float $rate;
}
