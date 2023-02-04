<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Meeting;
use App\Stock;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $meetings = Meeting::all();

        $stocks = Stock::all();

        // return view('home')->with(compact(
        //     'meetings',
        // ));

        return view('home')->with(compact(
            'stocks'
        ));

        // return view('home')->with('scc_message', '削除しました');

        // return redirect()->route('home')->with('scc_message', '投稿しました');

    }

    public function hpost()
    {
        // session
        return redirect()->route('hpost')->with('scc_message', '投稿しました');
    }
}
