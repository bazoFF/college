<?php

namespace App\Dto\Bank;

use App\Models\Bank;

class BankDto
{
    public int $id;
    public string $name;
    public float $rate;

    public static function create($bank): self
    {
        if ($bank instanceof Bank) {
            $bank = $bank->toArray();
        }

        $dto = new self();
        $dto->id = $bank['id'];
        $dto->name = $bank['name'];
        $dto->rate = $bank['rate'];

        return $dto;
    }
}
