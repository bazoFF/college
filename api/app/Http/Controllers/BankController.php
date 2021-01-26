<?php

namespace App\Http\Controllers;

use App\EntityServices\BankService;

class BankController extends Controller
{
    // todo: добавить все CRUD операции

    private BankService $bankGetService;

    public function __construct(BankService $bankGetService)
    {
        $this->bankGetService = $bankGetService;
    }

    public function getAll()
    {
        $dto = $this->bankGetService->getAll();

        return response()->json($dto);
    }
}
