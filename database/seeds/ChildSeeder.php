<?php

use Illuminate\Database\Seeder;
use App\Child;

class ChildSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Child::class)->create([
            'id' => '1',
            'name' => 'HTMLを学習する',
            'content' => 'HTMLを学習するメリット',
            'detail_id' => '1',
        ]);
    }
}
