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
            'parent_id' => '1',
        ]);
        factory(Child::class)->create([
            'id' => '2',
            'name' => 'CSSを学習する',
            'content' => 'CSSを学習するメリット',
            'parent_id' => '1',
        ]);
        factory(Child::class)->create([
            'id' => '3',
            'name' => '発音を練習する',
            'content' => '発音を練習するメリット',
            'parent_id' => '2',
        ]);
    }
}
