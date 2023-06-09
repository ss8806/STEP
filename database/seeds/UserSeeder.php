<?php

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class)->create([
            'id' => '1',
            'name' => 'テスト1',
            'email' => 'a@a.com',
            'email_verified_at' => now(),
            'produce' => 'お願いします',
            'password' => Hash::make('a'),
        ]);
        factory(User::class)->create([
            'id' => '2',
            'name' => 'テスト2',
            'email' => 'b@b.com',
            'email_verified_at' => now(),
            'produce' => 'お願いします',
            'password' => Hash::make('b'),
        ]);
        factory(User::class)->create([
            'id' => '3',
            'name' => 'テスト3',
            'email' => 'c@c.com',
            'email_verified_at' => now(),
            'produce' => 'お願いします',
            'password' => Hash::make('c'),
        ]);
    }
}
