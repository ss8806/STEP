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
            'name' => '断食をする',
            'content' => '断食をすることにより~~',
            'count_child' => '0',
            'user_id' => '1',
        ]);
        factory(Step::class)->create([
            'id' => '2',
            'name' => 'ボランティアをする',
            'content' => 'ボランティアをすることによって〜〜〜',
            'count_child' => '0',
            'user_id' => '2',
        ]);
        factory(Step::class)->create([
            'id' => '3',
            'name' => 'キャンプスポット',
            'content' => 'おすすめのキャンプスポットの紹介',
            'count_child' => '0',
            'user_id' => '2',
        ]);
        factory(Step::class)->create([
            'id' => '4',
            'name' => '格闘技をして鍛える',
            'content' => '格闘技をすることによって〜〜〜〜〜',
            'count_child' => '0',
            'user_id' => '2',
        ]);
        factory(Step::class)->create([
            'id' => '5',
            'name' => 'サイクリングをする',
            'content' => 'サイクリングをして~~~~~~',
            'count_child' => '0',
            'user_id' => '3',
        ]);
        factory(Step::class)->create([
            'id' => '6',
            'name' => 'サウナ通いをする',
            'content' => 'サウナに行き~~~~~~',
            'count_child' => '0',
            'user_id' => '3',
        ]);
        factory(Step::class)->create([
            'id' => '8',
            'name' => 'PCを自作する',
            'content' => 'PCを自作することによって~~~~~~',
            'count_child' => '0',
            'user_id' => '2',
        ]);
        factory(Step::class)->create([
            'id' => '9',
            'name' => '読書をする',
            'content' => '読書をすることによって~~~~~~',
            'count_child' => '0',
            'user_id' => '1',
        ]);
        factory(Step::class)->create([
            'id' => '10',
            'name' => 'お遍路巡りをする',
            'content' => 'お遍路巡りをして~~~~~~',
            'count_child' => '0',
            'user_id' => '3',
        ]);
        factory(Step::class)->create([
            'id' => '11',
            'name' => '英語を学習する',
            'content' => '英語を学習方法とメリット~~',
            'count_child' => '1',
            'user_id' => '2',
        ]);
        factory(Step::class)->create([
            'id' => '12',
            'name' => 'プログラミングを学習',
            'content' => 'プログラミングを習得した手順~~',
            'count_child' => '9',
            'user_id' => '1',
        ]);
    }
}
