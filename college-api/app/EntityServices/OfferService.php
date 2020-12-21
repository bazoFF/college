<?php

namespace App\EntityServices;

use App\Dto\Loan\BankDto;
use App\Dto\Loan\OfferDto;
use App\Dto\Loan\OfferRequestDto;
use App\Models\Bank;

class OfferService
{
    public function getOffers(OfferRequestDto $dto)
    {
        $banks = Bank::all();

        return $banks->map(fn (Bank $bank) => $this->getOffer($bank, $dto));
    }

    private function getOffer(Bank $bank, OfferRequestDto $dto)
    {
        $offer = new OfferDto();
        $offer->bank = BankDto::createFromEntity($bank);
        $offer->credit = $dto->price - $dto->deposit;
        $offer->monthlyPayment = $offer->credit * (1 + $offer->bank->rate) / ($dto->duration * 12);
        $offer->neededSalary = $offer->monthlyPayment * 1.5;

        return $offer;
    }
}
