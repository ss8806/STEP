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
            'name' => 'プログラミングを学習する',
            'content' => 'プログラミングを学習するメリット',
            'count_child' => '2',
            'user_id' => '1',
        ]);
        factory(Step::class)->create([
            'id' => '2',
            'name' => '英語を学習する',
            'content' => '英語を学習するメリット',
            'count_child' => '1',
            'user_id' => '2',
        ]);
        factory(Step::class)->create([
            'id' => '3',
            'name' => 'キャンプをする',
            'content' => 'キャンプするメリット',
            'count_child' => '0',
            'user_id' => '2',
        ]);
    }
}
