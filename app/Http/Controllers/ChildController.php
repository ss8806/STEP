<?php

namespace App\Http\Controllers;

use App\Child;
use App\Step;
use App\Challenge;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StepRequest;


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
    public function create($id)
    {
        $step = Step::find($id);
        if ($step->user_id === Auth::user()->id) {
            $oldname = old('name');
            $oldcontent = old('content');
            return view('postChild')
                ->with('step', $step)
                ->with('oldname', $oldname)
                ->with('oldcontent', $oldcontent);
        } else {
            return redirect()->route('steps');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StepRequest $request, $id)
    {
        // ルーティングから親ステップの情報を取得
        $step = Step::find($id);
        $child = new Child();
        $child->name = $request->input('name');
        $child->content = $request->input('content');
        $child->detail_id = $step->id;
        //親ステップのカウントに追加
        $step->count_child += 1;
        $child->save();
        $step->update();

        return redirect()->route('showDetail', $step->id)->with('scc_message', '投稿しました');
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

        if (Auth::user()) {
            $show = Challenge::where('step_id', $child->detail_id)
                ->where('user_id', Auth::user()->id)->first();
        }
        // modelに設定したbelongsto
        $step = $child->BelongsToStep()->get();

        return view('child')
            ->with('child', $child)
            ->with('is_checked', $is_checked)
            ->with('show', $show)
            ->with('step', $step);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Child  $child
     * @return \Illuminate\Http\Response
     */
    public function edit(Child $child, $id)
    {
        $child = Child::find($id);
        $step = $child->BelongsToStep()->get();
        if($step[0]->user_id === Auth::user()->id){
            return view('editChild')->with('child', $child)->with('step', $step);
        } else {
            return redirect()->route('steps');
        }    
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Child  $child
     * @return \Illuminate\Http\Response
     */
    public function update(StepRequest $request, Child $child, $id)
    {
        $child = Child::find($id);
        $step = $child->BelongsToStep()->get();
        $child->name = $request->input('name');
        $child->content = $request->input('content');
        $child->update();
        return redirect()->route('showDetail', $step[0]->id)->with('scc_message', '投稿しました');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Child  $child
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $child = Child::find($id);
        $step = Step::find($child->detail_id);
        $step->count_child -= 1;
        $child->delete($child->id);
        $step->update();
        return redirect()->route('showDetail', $child->detail_id)->with('scc_message', '削除しました');
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
