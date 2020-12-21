<?php

namespace App\Dto\Loan;

class LoanRequestDto
{
    public static function create(array $fields): self
    {
        $dto = new self();
        $dto->offer = OfferDto::create($fields['offer']);
        $dto->offerRequest = OfferRequestDto::create($fields['offerRequest']);
        $dto->person = PersonDto::create($fields['person']);

        return $dto;
    }

    public OfferDto $offer;

    public OfferRequestDto $offerRequest;

    public PersonDto $person;
}
