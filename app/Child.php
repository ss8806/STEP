<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Child extends Model
{
    // 気になるリストについての処理
    public function checks(): BelongsToMany
    {
        // checksにおけるideaモデルとuserモデルの関係は多対多となる。 第二引数には中間テーブルchecksを指定
        return $this->belongsToMany('App\User', 'checks')->withTimestamps();
    }

    public function ischeckedBy(?User $user): bool
    {
        // $this->checksにより、ideaモデルからchecksテーブル経由で紐付くユーザーモデルが、コレクションで返る。
        // countメソッドは、コレクションの要素数を数えて、数値を返す
        return $user //三項演算子
            // このアイデアををお気に入りにしたユーザーの中に、引数として渡された$userがいれば、1かそれより大きい数値が返る
            ? (bool)$this->checks->where('id', $user->id)->count()
            // このアイデアをいいねしたユーザーの中に、引数として渡された$userがいなければ、0が返る
            : false;
    }
}
