<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Bank;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    private Generator $faker;

    public function __construct(Generator $faker)
    {
        $this->faker = $faker;
    }

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//        $this->seedAdmin();
        $this->seedBanks();
    }

//    private function seedAdmin()
//    {
//        Admin::create('admin', Hash::make('hbT&e252g$RYLPDx!@9a'));
//    }

    private function seedBanks()
    {
        $names = ['Cбербанк', 'Тинькофф', 'Альфа-Банк', 'Райффайзенбанк'];

        foreach ($names as $name) {
            Bank::create($name, $this->faker->randomFloat(1, 6, 11));
        }
    }
}
