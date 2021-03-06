<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $firstName
 * @property string $lastName
 * @property string $middleName
 * @property string $email
 * @property string $phone
 * @property string $passportSeries
 * @property string $passportNumber
 * @property int $age
 * @property int $salary
 *
 * @method static self find($id)
*/
class Person extends Model
{
    public function getFullName(): string
    {
        return "$this->firstName $this->lastName";
    }

    protected $table = 'people';

    protected $fillable = [
        'firstName',
        'lastName',
        'middleName',
        'email',
        'phone',
        'salary',
        'age',
        'passportSeries',
        'passportNumber',
    ];
}
