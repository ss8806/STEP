<?php

namespace App\Http\Controllers;

use App\Child;
use App\Challenge;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class ChildController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $child = new Child();
        $child->name = $request->input('name');
        $child->content = $request->input('content');
        $child->user_id = Auth::user()->id;
        $child->save();
        return redirect()->route('steps')->with('scc_message', '投稿しました');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Child  $child
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $child = Child::find($id);
        $is_checked = $child->isChecked(Auth::user());
        $show = 0;

        if(Auth::user()){
        $show = Challenge::where('step_id', $child->detail_id)
            ->where('user_id', Auth::user()->id)->first();
        }
        return view('child')
            ->with('child', $child)
            ->with('is_checked', $is_checked)
            ->with('show', $show);;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Child  $child
     * @return \Illuminate\Http\Response
     */
    public function edit(Child $child)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Child  $child
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Child $child)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Child  $child
     * @return \Illuminate\Http\Response
     */
    public function destroy(Child $child)
    {
        //
    }

    // 気になるリストに登録する処理
    public function check(Request $request, Child $child)
    {
        //モデルを結びつけている中間テーブルにレコードを削除する。 
        $child->checks()->detach($request->user()->id);
        // モデルを結びつけている中間テーブルにレコードを挿入する。 
        $child->checks()->attach($request->user()->id);
    }

    // 気になるリストから削除する処理
    public function uncheck(Request $request, Child $child)
    {
        $child->checks()->detach($request->user()->id);
    }
}
