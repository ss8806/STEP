<?php

namespace App\Http\Controllers;

use App\Step;
use App\Child;
use Illuminate\Http\Request;
use App\Http\Requests\SearchRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StepRequest;

class StepController extends Controller
{
    /**
     * ステップ一覧を表示
     *
     * @return \Illuminate\Http\Response
     */
    public function index(SearchRequest $request)
    {
        $query = Step::query();

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

        return view('steps')
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

    /**
     * ステップを作成する
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // 前のフォームの値
        $oldname = old('name');
        $oldcontent = old('content');
        return view('postStep')
            ->with('oldname', $oldname)
            ->with('oldcontent', $oldcontent);
    }

    /**
     * 作成したステップを保存する
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StepRequest $request)
    {
        $step = new Step();
        $step->name = $request->input('name');
        $step->content = $request->input('content');
        $step->user_id = Auth::user()->id;
        $step->save();
        return redirect()->route('steps')->with('scc_message', '投稿しました');
    }

    /**
     * ステップの詳細をみる
     *
     * @param  \App\Step  $step
     * @returnå \Illuminate\Http\Response
     */
    public function show($id)
    {
        $step = Step::find($id);
        $is_challenged = $step->isChallenged(Auth::user());
        $children = Child::where('parent_id', $id)->paginate(8);
        // 子ステップのチェック状況を取得
        $is_checked = array();
        foreach ($children as $child) {
            $is_checked[] = $child->isChecked(Auth::user());
        }
        return view('detail')
            ->with('step', $step)
            ->with('is_challenged', $is_challenged)
            ->with('children', $children)
            ->with('is_checked', $is_checked);
    }

    /**
     * ステップを編集する
     *
     * @param  \App\Step  $step
     * @return \Illuminate\Http\Response
     */
    public function edit(Step $step, $id)
    {
        $step = Step::find($id);
        // フォームに入力した内容
        $oldname = old('name');
        $oldcontent = old('content');
        if ($step->user_id === Auth::user()->id) {
            $message = "削除してよろしいですか";
            $consent = "削除する";
            return view('editStep')
                ->with('step', $step)
                ->with('message', $message)
                ->with('consent', $consent)
                ->with('oldname', $oldname)
                ->with('oldcontent', $oldcontent);
        } else {
            return redirect()->route('steps');
        }
    }

    /**
     * 編集したステップを保存する
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Step  $step
     * @return \Illuminate\Http\Response
     */
    public function update(StepRequest $request, Step $step, $id)
    {
        $step = Step::find($id);
        $step->name = $request->input('name');
        $step->content = $request->input('content');
        $step->update();
        return redirect()->route('steps')->with('scc_message', '編集しました');
    }

    /**
     * ステップを消去する
     *
     * @param  \App\Step  $step
     * @return \Illuminate\Http\Response
     */
    public function destroy(Step $step, $id)
    {
        $step = Step::find($id);
        $step->delete($step->id);
        return redirect()->route('steps')->with('scc_message', '削除しました');
    }

    // チャレンジ状態にする
    public function challenge(Request $request, Step $step)
    {
        //モデルを結びつけている中間 テーブルにレコードを削除する。 
        $step->challenges()->detach($request->user()->id);
        // モデルを結びつけている中間テーブルにレコードを挿入する。 
        $step->challenges()->attach($request->user()->id);
    }

    // チャレンジ状態を解除する
    public function unchallenge(Request $request, Step $step)
    {
        $step->challenges()->detach($request->user()->id);
    }
}
