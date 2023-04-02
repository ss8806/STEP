<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Step;
use App\Child;


class MypageController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // チャレンジしたステップを取得 ChallengedStepsは Models/Userで定義
        $challenges = $user->ChallengedSteps()->orderBy('id', 'DESC')->take(5)->get();

        // $challenges2 = $user->ChallengedSteps2()->get();
        // dd($challenges2);

        // $query = User::query();

        // $query
        // ->join('challenges', 'users.id', '=', 'challenges.user_id')
        // ->where('challenges.user_id', $user->id)
        // ->join('checks', 'users.id', '=', 'checks.user_id',)
        // ->where('checks.user_id', $user->id)
        // ->join('steps', 'challenges.step_id', '=','steps.id')
        // ->select(
        //     'users.id as user_id',
        //     'challenges.step_id as challenge_id',
        //     'checks.child_id as check_id',
        //     'steps.name',
        //     'steps.content',
        // );

        // $query = Step::query();

        // $query
        // // ->join('children', 'children.detail_id', '=', 'steps.id')
        // ->join('challenges', 'challenges.step_id', '=', 'steps.id')
        // // ->join('checks', 'checks.child_id', '=', 'children.id')
        // ->where('challenges.user_id', $user->id)
        // // ->where('checks.user_id', $user->id)
        // ->select(
        //     'challenges.step_id as challenge_id',
        //     // 'checks.child_id as check_id',
        //     'steps.name',
        //     'steps.content',
        // );

        // $q = $query->get();

        // $query2 = Child::query();
        // $query2
        // ->join('checks', 'checks.child_id', '=', 'children.id')
        // ->where('checks.user_id', $user->id)
        // ->select(
        //     'checks.child_id as challenge_id',
        //     'children.name',
        //     'children.content',
        // );

        // $q2 = $query2->get();

        // dd($q2);


        $query = Step::query();

        $query
        ->join('children', 'children.detail_id', '=', 'steps.id')
        ->join('challenges', 'challenges.step_id', '=', 'steps.id')
        ->join('checks', 'checks.child_id', '=', 'children.id')
        ->where('challenges.user_id', $user->id)
        ->where('checks.user_id', $user->id)
        ->select(
            'challenges.step_id as challenge_id',
            'checks.child_id as check_id',
            'steps.name as step_name',
            'steps.content as step_content',
            'children.name as child_name',
            'children.content as child_content',
        );
        $q = $query->get();

        dd($q);



        return view('mypage')
            ->with('user', $user)
            ->with('challenges', $challenges);
    }
}
