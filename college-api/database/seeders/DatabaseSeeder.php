<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->admin();
    }

    private function admin()
    {
        $admin = new User();
        $admin->login = 'admin';
        $admin->password = Hash::make('hbT&e252g$RYLPDx!@9a');
        $admin->save();
    }
}
