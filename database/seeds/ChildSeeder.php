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
            'parent_id' => '12',
        ]);
        factory(Child::class)->create([
            'id' => '2',
            'name' => 'CSSを学習する',
            'content' => 'CSSを学習するメリット',
            'parent_id' => '12',
        ]);
        factory(Child::class)->create([
            'id' => '3',
            'name' => '発音を練習する',
            'content' => '発音を練習するメリット',
            'parent_id' => '11',
        ]);
        factory(Child::class)->create([
            'id' => '4',
            'name' => 'Javascriptを学習する',
            'content' => 'Javascriptを学習するメリット',
            'parent_id' => '11',
        ]);
        factory(Child::class)->create([
            'id' => '5',
            'name' => 'PHPを学習する',
            'content' => 'PHPを学習するメリット',
            'parent_id' => '12',
        ]);
        factory(Child::class)->create([
            'id' => '6',
            'name' => 'Linuxを学習する',
            'content' => 'Linuxを学習するメリット',
            'parent_id' => '12',
        ]);
        factory(Child::class)->create([
            'id' => '7',
            'name' => 'フレームワークを学習する',
            'content' => 'フレームワーク学習するメリット',
            'parent_id' => '12',
        ]);
        factory(Child::class)->create([
            'id' => '8',
            'name' => 'クラウドを学習する',
            'content' => 'クラウド学習するメリット',
            'parent_id' => '12',
        ]);
        factory(Child::class)->create([
            'id' => '9',
            'name' => 'ネットワーク機器を学習する',
            'content' => 'ネットワーク機器を学習するメリット',
            'parent_id' => '12',
        ]);
        factory(Child::class)->create([
            'id' => '10',
            'name' => '低級言語を学習する',
            'content' => '低級言語を学習するメリット',
            'parent_id' => '12',
        ]);
    }
}
