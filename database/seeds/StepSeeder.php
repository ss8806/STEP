<?php

use Illuminate\Database\Seeder;
use App\Step;


class StepSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Step::class)->create([
            'id' => '1',
            'name' => 'テスト1',           
        ]);
    }
}
