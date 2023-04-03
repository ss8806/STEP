<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Step;
use Illuminate\Support\Facades\DB;


class MypageController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // チャレンジしたステップを取得 ChallengedStepsは Models/Userで定義
        // $challenges = $user->ChallengedSteps()->orderBy('id', 'DESC')->take(5)->get();

        $query = Step::query();

        $query
            ->select(
                'challenges.step_id as challenge_id',
                'steps.name as step_name',
                'steps.content as step_content',
                'children.detail_id',
                DB::raw("count(children.detail_id) as count")
            )
            ->join('children', 'children.detail_id', '=', 'steps.id')
            ->join('challenges', 'challenges.step_id', '=', 'steps.id')
            ->join('checks', 'checks.child_id', '=', 'children.id')
            ->where('challenges.user_id', $user->id)
            ->where('checks.user_id', $user->id)
            ->groupBy('children.detail_id');

        $challenges = $query->get();

        return view('mypage')
            ->with('user', $user)
            ->with('challenges', $challenges);
    }
}
