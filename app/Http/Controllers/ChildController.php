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
        //
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
        $is_liked = $child->isLikedBy(Auth::user());

        $show = Challenge::where('step_id', $child->detail_id)
            ->where('user_id', Auth::user()->id)->first();
        
        return view('child')
            ->with('child', $child)
            ->with('is_liked', $is_liked)
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
    public function like(Request $request, Child $child)
    {
        //モデルを結びつけている中間テーブルにレコードを削除する。 
        $child->likes()->detach($request->user()->id);
        // モデルを結びつけている中間テーブルにレコードを挿入する。 
        $child->likes()->attach($request->user()->id);
    }

    // 気になるリストから削除する処理
    public function unlike(Request $request, Child $child)
    {
        $child->likes()->detach($request->user()->id);
    }
}
