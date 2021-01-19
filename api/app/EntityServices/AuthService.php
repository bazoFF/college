<?php

namespace App\EntityServices;

use App\Dto\Auth\CredentialsDto;
use App\Models\Admin;
use Carbon\Carbon;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    public function getToken(CredentialsDto $dto)
    {
        /** @var Admin $admin */
        $admin = Admin::query()->where('login', $dto->login)->first();

        if (empty($admin)) {
            return response()->json('Пользователя с таким логином не существует', 444);
        }

        if (!Hash::check($dto->password, $admin->password)) {
            return response()->json('Неверный пароль', 444);
        }

        return $this->createToken($dto);
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
