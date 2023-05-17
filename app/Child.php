<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Child extends Model
{
    // Child(子STEP)についての処理
    public function checks(): BelongsToMany
    {
        // Checksにおけるchecksモデルとuserモデルの関係は多対多となる。
        return $this->belongsToMany('App\User', 'checks')->withTimestamps();
    }

    public function isChecked(?User $user): bool
    {
        // $this->checksにより、childモデルからchecksテーブル経由で紐付くユーザーモデルが、コレクションで返る。
        // countメソッドは、コレクションの要素数を数えて、数値を返す
        return $user
            // このChildををお気に入りにしたユーザーの中に、引数として渡された$userがいれば、1かそれより大きい数値が返る
            ? (bool)$this->checks->where('id', $user->id)->count()
            // このChildをチェックしたユーザーの中に、引数として渡された$userがいなければ、0が返る
            : false;
    }

    public function belongsToStep()
    {
        return $this->belongsTo('App\Step',  'parent_id' ,'id');
    }
}
