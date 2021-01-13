<?php

namespace App\Http\Controllers;

use App\Dto\Auth\CredentialsDto;
use App\EntityServices\AuthService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    private AuthService $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    public function login(Request $request)
    {
        $dto = new CredentialsDto($request->all());
        $token = $this->authService->getToken($dto);

        return response()->json($token);
    }
}
