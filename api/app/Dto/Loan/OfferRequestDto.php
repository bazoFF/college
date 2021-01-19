<?php

namespace App\Dto\Loan;

class OfferRequestDto
{
    public static function create(array $fields): self
    {
        $dto = new self();
        $dto->price = $fields['price'];
        $dto->deposit = $fields['deposit'];
        $dto->duration = $fields['duration'];

        return $dto;
    }

    public int $price;

    public int $deposit;

    public int $duration;
}
