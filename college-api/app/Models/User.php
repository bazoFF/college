<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string $login
 * @property string $password
 * @property string $remember_token
 */
class User extends Model
{
    public $timestamps = false;

    protected $table = 'users';

    protected $fillable = [
        'login',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}
