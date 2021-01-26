<?php

namespace App\Http\Controllers;

use App\Dto\Loan\BankDto;
use App\Dto\Loan\LoanRequestDto;
use App\Dto\Loan\OfferRequestDto;
use App\EntityServices\LoanRequestService;
use App\EntityServices\OfferService;
use App\Models\Bank;
use App\Models\LoanRequest;
use Illuminate\Http\Request;

class LoanController extends Controller
{
    private OfferService $offerService;

    private LoanRequestService $loanRequestService;

    public function __construct(OfferService $offerService, LoanRequestService $loanRequestService)
    {
        $this->offerService = $offerService;
        $this->loanRequestService = $loanRequestService;
    }

    public function getOffers(Request $request)
    {
        $dto = OfferRequestDto::create($request->toArray());

        return response()->json($this->offerService->getOffers($dto));
    }

    public function loanRequest(Request $request)
    {
        $dto = LoanRequestDto::create($request->toArray());

        $this->loanRequestService->create($dto);

        return response()->noContent();
    }

    public function get()
    {
        return response()->json(array_values(
            LoanRequest::query()->get()
                ->map(fn(Bank $bank) => BankDto::createFromEntity($bank))
                ->toArray()
        ));
    }
}
