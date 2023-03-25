<?php

namespace App\Http\Controllers;

use App\Step;
use App\Child;
use Illuminate\Http\Request;
use App\Http\Requests\SearchRequest;
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

        $all = Step::all();
        foreach ($query as $step) {
            $step->isChallenged(Auth::user());
        }


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

        foreach ($query as $step) {
            $step->isChallenged(Auth::user());
        }

        // ページャー
        $steps = $query->orderBy('id', 'DESC')->paginate(8);

    
        // return view('steps')->with(compact(
        //     'steps'
        // ));

        return view('steps')
        ->with('all', $all)
        ->with('steps', $steps);
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
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $step = new Step();
        $step->name = $request->input('name');
        $step->content = $request->input('content');
        $step->user_id = Auth::user()->id;
        $step->save();
        return redirect()->route('steps')->with('scc_message', '投稿しました');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Step  $step
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $step = Step::find($id);
        $children = Child::where('detail_id', $id)->paginate(8);
        if(Auth::user()){
            foreach ($children as $child) {
                $child->ischeckedBy(Auth::user());
            }
        }
        $is_challenged = $step->isChallenged(Auth::user());

        return view('detail')
            ->with('step', $step)
            ->with('children', $children)
            ->with('is_challenged', $is_challenged);
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
    public function challenge(Request $request, Step $step)
    {
        //モデルを結びつけている中間 テーブルにレコードを削除する。 
        $step->challenges()->detach($request->user()->id);
        // モデルを結びつけている中間テーブルにレコードを挿入する。 
        $step->challenges()->attach($request->user()->id);
    }

    // 気になるリストから削除する処理
    public function unchallenge(Request $request, Step $step)
    {
        $step->challenges()->detach($request->user()->id);
    }
}
