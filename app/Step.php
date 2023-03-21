<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Step extends Model
{
     // 気になるリストについての処理
     public function challenges(): BelongsToMany
     {
         // challengesにおけるideaモデルとuserモデルの関係は多対多となる。 第二引数には中間テーブルchallengesを指定
         return $this->belongsToMany('App\User', 'challenges')->withTimestamps();
     }
 
     public function isChallenged(?User $user): bool
     {
         // $this->challengesにより、ideaモデルからchallengesテーブル経由で紐付くユーザーモデルが、コレクションで返る。
         // countメソッドは、コレクションの要素数を数えて、数値を返す
         return $user //三項演算子
             // このアイデアををお気に入りにしたユーザーの中に、引数として渡された$userがいれば、1かそれより大きい数値が返る
             ? (bool)$this->challenges->where('id', $user->id)->count()
             // このアイデアをいいねしたユーザーの中に、引数として渡された$userがいなければ、0が返る
             : false;
     }
}
