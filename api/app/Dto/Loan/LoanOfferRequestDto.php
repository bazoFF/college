<?php

namespace App\Dto\Loan;

class LoanOfferRequestDto
{
    public int $price;
    public int $deposit;
    public int $duration;

    public static function create(array $fields): self
    {
        $dto = new self();
        $dto->price = $fields['price'];
        $dto->deposit = $fields['deposit'];
        $dto->duration = $fields['duration'];

        return $dto;
    }
}
