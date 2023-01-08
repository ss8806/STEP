<?php

namespace App\Http\Controllers;

use App\stock;
use Illuminate\Http\Request;
use App\Http\Requests\SearchRequest;
use Illuminate\Validation\Validator;



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
            $query->whereDate('updated_at','>=', $updateDay);
        }

          // 投稿日 以下で絞り込み
          if ($request->filled('belowday')) {
            $updateDay = $this->escape($request->input('belowday'));
            $query->whereDate('updated_at','<=', $updateDay);
        }

        // 価格 以上で絞り込み
        if ($request->filled('aboveprice')) {
            $abovePrice =$this->escape($request->input('aboveprice'));
            $query->where('price','>=', $abovePrice);
        } 

        // 価格 以下で絞り込み
        if ($request->filled('belowprice')) {
            $belowPrice = $this->escape($request->input('belowprice'));
            $query->where('price','<=', $belowPrice);
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
    public function show(stock $stock)
    {
        //
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
