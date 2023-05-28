<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Step;
use App\Child;
use Illuminate\Support\Facades\DB;


class MypageController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        // 投稿したステップを５件取得
        $posts = $user->postSteps()->orderBy('id', 'DESC')->paginate(5);

        // チャレンジ中ののステップ

        // チェック情報を取得するサブクエリ
        $subquery = Child::query()
            ->select(
                'children.id as c_id',
                'children.parent_id as c_parent_id'
            )
            ->join('checks', 'checks.child_id', '=', 'children.id')
            ->where('checks.user_id', $user->id);
        $subquery->toSql();

        // チャレンジ中ののステップのレコードを取得
        $query = Step::query()
            ->select(
                'steps.id as challenge_id',
                'steps.name as step_name',
                'steps.content as step_content',
                // 親ステップが持つ子ステップの数
                'steps.count_child as count_child',
                'children.c_parent_id',
                // 子ステップのチェック数
                DB::raw("count(children.c_parent_id) as count"),
            )
            ->Join('challenges', 'challenges.step_id', '=', 'steps.id')
            ->where('challenges.user_id', $user->id)
            // stepsテーブルを軸に外部結合
            ->leftJoinSub($subquery, 'children', 'steps.id', 'children.c_parent_id')
            ->groupBy('steps.id');
        // チャレンジ中のステップを５件取得
        $challenges = $query->paginate(5);
        // チャレンジ中のステップなので初期値は全てtrueになる
        $is_challenged = array();
        foreach ($challenges as $challenge) {
            $is_challenged[] = true;
        }
        return view('mypage')
            ->with('user', $user)
            ->with('posts', $posts)
            ->with('challenges', $challenges)
            ->with('is_challenged', $is_challenged);
    }

    // 投稿したステップ一覧
    public function allposts()
    {
        $user = Auth::user();
        // 投稿したステップ
        $posts = $user->postSteps()->orderBy('id', 'DESC')->paginate(8);

        return view('allPosts')->with('posts', $posts);
    }

    // チャレンジ中のステップ一覧
    public function allChallenges()
    {
        $user = Auth::user();

        $subquery = Child::query()
            ->select(
                'children.id as c_id',
                'children.parent_id as c_parent_id'
            )
            ->join('checks', 'checks.child_id', '=', 'children.id')
            ->where('checks.user_id', $user->id);
        $subquery->toSql();

        $query = Step::query()
            ->select(
                'steps.id as challenge_id',
                'steps.name as step_name',
                'steps.content as step_content',
                'steps.count_child as count_child',
                'children.c_parent_id',
                DB::raw("count(children.c_parent_id) as count"),
            )
            ->Join('challenges', 'challenges.step_id', '=', 'steps.id')
            ->where('challenges.user_id', $user->id)
            // stepsテーブルを軸に外部結合
            ->leftJoinSub($subquery, 'children', 'steps.id', 'children.c_parent_id')
            ->groupBy('steps.id');
        $challenges = $query->paginate(8);
        $is_challenged = array();
        foreach ($challenges as $challenge) {
            $is_challenged[] = true;
        }
        return view('allChallenges')
        ->with('challenges', $challenges)
        ->with('is_challenged', $is_challenged);
    }
}
