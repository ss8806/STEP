<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\hasManyThrough;
use Illuminate\Support\Facades\Auth;


class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function ChallengedSteps(): hasManyThrough
    //  Has Many Through （〜経由で多数へ紐づく）
    // hasManyThroughメソッドの第1引数は最終的にアクセスしたいモデル名で、第２引数は仲介するモデル名
    {
        return $this->hasManyThrough(
            'App\Step', //つなげる先のテーブルクラス
            'App\Challenge', //中間テーブルクラス
            'user_id', //仲介するモデルの外部キー名
            'id', // 最終的に取得したいモデルのローカルキー名
            'id', // 元テーブルのローカルキー
            'step_id' // usersテーブルのローカルキー
        );
    }

    public function postSteps()
    {
    //第二引数には多側のキー(外部キー)であるuser_idを指定,これによりpostArticlesメソッドで投稿したArticleを取得できる。
        return $this->hasMany(Step::class, 'user_id');
    }

}
