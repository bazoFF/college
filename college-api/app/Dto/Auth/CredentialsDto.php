<?php

namespace App\Dto\Auth;

class CredentialsDto
{
    public function __construct(array $data)
    {
        $this->login = $data['login'];
        $this->password = $data['password'];
    }

    /** @var string $login */
    public $login;

    /** @var string $password */
    public $password;
}
