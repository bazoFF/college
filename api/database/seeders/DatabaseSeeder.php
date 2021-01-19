<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Bank;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

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
    public function run(): void
    {
        $this->seedAdmins();
        $this->seedBanks();
    }

    private function seedAdmins()
    {
        Admin::create('admin', Hash::make('12qwe345'));
    }

    private function seedBanks(): void
    {
        $names = ['Cбербанк', 'Тинькофф', 'Альфа-Банк', 'Райффайзенбанк'];

        foreach ($names as $name) {
            Bank::create($name, $this->faker->randomFloat(1, 6, 11));
        }
    }
}
