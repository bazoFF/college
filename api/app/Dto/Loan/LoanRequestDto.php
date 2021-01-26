<?php

namespace App\Dto\Loan;

use App\Dto\Person\PersonDto;

class LoanRequestDto
{
    public LoanOfferDto $offer;
    public LoanOfferRequestDto $offerRequest;
    public PersonDto $person;

    public static function create(array $fields): self
    {
        $dto = new self();
        $dto->offer = LoanOfferDto::create($fields['offer']);
        $dto->offerRequest = LoanOfferRequestDto::create($fields['offerRequest']);
        $dto->person = PersonDto::create($fields['person']);

        return $dto;
    }
}
