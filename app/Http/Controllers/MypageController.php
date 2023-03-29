<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Step;

class MypageController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // チャレンジしたステップを取得 ChallengedStepsは Models/Userで定義

        $challenges = $user->ChallengedSteps()->orderBy('id', 'DESC')->take(5)->get();

        //dd($challenges);

        return view('mypage')
            ->with('user', $user)
            ->with('challenges', $challenges);
    }
}
