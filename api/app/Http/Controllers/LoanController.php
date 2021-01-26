<?php

namespace App\Http\Controllers;

use App\Dto\Loan\LoanRequestDto;
use App\Dto\Loan\LoanOfferRequestDto;
use App\EntityServices\LoanService;
use Illuminate\Http\Request;

class LoanController extends Controller
{
    private LoanService $loanService;

    public function __construct(LoanService $loanService)
    {
        $this->loanService = $loanService;
    }

    public function create(Request $request)
    {
        $dto = LoanRequestDto::create($request->toArray());

        $this->loanService->create($dto);

        return response()->noContent();
    }

    public function getOffers(Request $request)
    {
        $dto = LoanOfferRequestDto::create($request->toArray());

        return response()->json($this->loanService->getOffers($dto));
    }

    public function getAll()
    {
        $dto = $this->loanService->getAll();

        return response()->json($dto);
    }
}
