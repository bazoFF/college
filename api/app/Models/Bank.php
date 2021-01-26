<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property int $rate
 *
 * @method static self find($id)
 */
class Bank extends Model
{
    public static function create(string $name, float $rate)
    {
        $bank = new self();
        $bank->name = $name;
        $bank->rate = $rate;

        $bank->save();
    }

    public $timestamps = false;

    protected $table = 'banks';

    protected $fillable = [
        'name',
        'rate',
    ];
}
