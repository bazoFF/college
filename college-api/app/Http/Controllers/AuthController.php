<?php

namespace App\Http\Controllers;

use App\Dto\Auth\CredentialsDto;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Firebase\JWT\JWT;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    public function login(Request $request)
    {
        $dto = new CredentialsDto($request->all());

        /** @var User $admin */
        $admin = User::query()->where('login', $dto->login)->first();

        if (empty($admin)) {
            return response()->json('Пользователя с таким логином не существует', 444);
        }

        if (!Hash::check($dto->password, $admin->password)) {
            return response()->json('Неверный пароль', 444);
        }

        $token = $this->createToken($dto);

        return response()->json($token);
    }

    private function createToken(CredentialsDto $dto)
    {
        return JWT::encode(
            [
                'payload' => $dto,
                'exp' => $this->getExpirationDate()
            ],
            config('jwt.secret')
        );
    }

    private function getExpirationDate()
    {
        $expiration = new Carbon();
        $expiration = $expiration->addMinutes(config('jwt.ttl'));
        return $expiration->timestamp;
    }
}
