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
        // 投稿したステップ
        $posts = $user->postSteps()->orderBy('id', 'DESC')->take(5)->get();

        // チャレンジ中ののステップ

        // サブクエリ
        $subquery = Child::query()
            ->select(
                'children.id as c_id',
                'children.detail_id as c_detail_id'
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
                'children.c_detail_id',
                DB::raw("count(children.c_detail_id) as count"),
            )
            ->Join('challenges', 'challenges.step_id', '=', 'steps.id')
            ->where('challenges.user_id', $user->id)
            // stepsテーブルを軸に外部結合
            ->leftJoinSub($subquery, 'children', 'steps.id', 'children.c_detail_id')
            ->groupBy('steps.id');
        $challenges = $query->take(5)->get();
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

    public function posts()
    {
        $user = Auth::user();
        // 投稿したステップ
        $posts = $user->postSteps()->orderBy('id', 'DESC')->get();

        return view('posts')
        ->with('posts', $posts);
    }

    public function challenges()
    {
        $user = Auth::user();

        $subquery = Child::query()
            ->select(
                'children.id as c_id',
                'children.detail_id as c_detail_id'
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
                'children.c_detail_id',
                DB::raw("count(children.c_detail_id) as count"),
            )
            ->Join('challenges', 'challenges.step_id', '=', 'steps.id')
            ->where('challenges.user_id', $user->id)
            // stepsテーブルを軸に外部結合
            ->leftJoinSub($subquery, 'children', 'steps.id', 'children.c_detail_id')
            ->groupBy('steps.id');
        $challenges = $query->get();
        $is_challenged = array();
        foreach ($challenges as $challenge) {
            $is_challenged[] = true;
        }
        return view('challenges')
            ->with('challenges', $challenges)
            ->with('is_challenged', $is_challenged);
    }
}
