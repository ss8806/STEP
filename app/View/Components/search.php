<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\Support\Facades\Request;

class search extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        $defaults = [
            'category'      => Request::input('category', ''),
            'keyword'       => Request::input('keyword', ''),
            'aboveday'      => Request::input('aboveday', ''),
            'belowday'      => Request::input('belowday', ''),
        ];

        return view('components.search')
            ->with('defaults', $defaults);;
    }
}
