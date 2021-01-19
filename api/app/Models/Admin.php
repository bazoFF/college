<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string $login
 * @property string $password
 * @property string $remember_token
 */
class Admin extends Model
{
    public static function create(string $login, string $password)
    {
        $admin = new self();
        $admin->login = $login;
        $admin->password = $password;

        $admin->save();
    }

    public $timestamps = false;

    protected $table = 'admins';

    protected $fillable = [
        'login',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}
