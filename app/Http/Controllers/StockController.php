<?php

namespace App\Http\Controllers;

use App\Stock;
use Illuminate\Http\Request;
use App\Http\Requests\SearchRequest;
use Illuminate\Validation\Validator;
use Illuminate\Support\Facades\Auth;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(SearchRequest $request)
    {
        // $stocks = Stock::all();

        $query = Stock::query();

        // $validated = $request->validate([
        //     'aboveprice' => ['required', 'max:2'],
        // ]);


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

        // 価格 以上で絞り込み
        if ($request->filled('aboveprice')) {
            $abovePrice = $this->escape($request->input('aboveprice'));
            $query->where('price', '>=', $abovePrice);
        }

        // 価格 以下で絞り込み
        if ($request->filled('belowprice')) {
            $belowPrice = $this->escape($request->input('belowprice'));
            $query->where('price', '<=', $belowPrice);
        }

        // ページャー
        $stocks = $query->orderBy('id', 'DESC')->paginate(8);


        return view('home')->with(compact(
            'stocks'
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

    // 気になるリストに登録する処理
    public function like(Request $request, Stock $stock)
    {
        //モデルを結びつけている中間テーブルにレコードを削除する。 
        $stock->likes()->detach($request->user()->id);
        // モデルを結びつけている中間テーブルにレコードを挿入する。 
        $stock->likes()->attach($request->user()->id);
    }

    // 気になるリストから削除する処理
    public function unlike(Request $request, Stock $stock)
    {
        $stock->likes()->detach($request->user()->id);
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
     * @param  \App\stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {     
        $detail = Stock::find($id);
        $is_liked = $detail->isLikedBy(Auth::user());

        return view('show') // ideas/idea_detail.blade.php
            ->with('detail', $detail)
            ->with('is_liked', $is_liked);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function edit(stock $stock)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, stock $stock)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\stock  $stock
     * @return \Illuminate\Http\Response
     */
    public function destroy(stock $stock)
    {
        //
    }
}
