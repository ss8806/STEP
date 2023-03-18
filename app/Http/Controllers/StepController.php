<?php

namespace App\Http\Controllers;

use App\Step;
use Illuminate\Http\Request;
use App\Http\Requests\SearchRequest;
use Illuminate\Validation\Validator;
use Illuminate\Support\Facades\Auth;

class StepController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(SearchRequest $request)
    {
        $query = Step::query();

        // 投稿日 以上で絞り込み
        if ($request->filled('aboveday')) {
            $updateDay = $this->escape($request->input('aboveday'));
            $query->whereDate('updated_at', '>=', $updateDay);
        }

        // 投稿日 以下で絞り込み
        if ($request->filled('belowday')) {
            $updateDay = $this->escape($request->input('belowday'));
            $query->whereDate('updated_at', '<=', $updateDay);
        }

        // ページャー
        $steps = $query->orderBy('id', 'DESC')->paginate(8);

        return view('steps')->with(compact(
            'steps'
        ));
    }

    private function escape(string $value)
    {
        return str_replace(
            ['\\', '%', '_'],
            ['\\\\', '\\%', '\\_'],
            $value
        );
    }
    
    public function hpost()
    {
        // session
        return redirect()->route('hpost')->with('scc_message', '投稿しました');
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
     * @param  \App\Step  $step
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {     
        $detail = Step::find($id);
        $is_liked = $detail->isLikedBy(Auth::user());

        return view('show')
            ->with('detail', $detail)
            ->with('is_liked', $is_liked)
            ;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Step  $step
     * @return \Illuminate\Http\Response
     */
    public function edit(Step $step)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Step  $step
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Step $step)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Step  $step
     * @return \Illuminate\Http\Response
     */
    public function destroy(Step $step)
    {
        //
    }

     // 気になるリストに登録する処理
     public function like(Request $request, Step $step)
     {
         //モデルを結びつけている中間テーブルにレコードを削除する。 
         $step->likes()->detach($request->user()->id);
         // モデルを結びつけている中間テーブルにレコードを挿入する。 
         $step->likes()->attach($request->user()->id);
     }
 
     // 気になるリストから削除する処理
     public function unlike(Request $request, Step $step)
     {
         $step->likes()->detach($request->user()->id);
     }
}
