<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $bankId
 * @property int $personId
 * @property int $monthlyPayment
 * @property int $price
 * @property int $deposit
 * @property int $duration
 */
class LoanRequest extends Model
{
    protected $table = 'loan_requests';

    protected $fillable = [
        'bankId',
        'personId',
        'monthlyPayment',
        'price',
        'deposit',
        'duration',
    ];
}
