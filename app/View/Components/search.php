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
    public $defaults;

    public function __construct()
    {
        $this->defaults = [
            'aboveday'      => Request::input('aboveday', ''),
            'belowday'      => Request::input('belowday', ''),
        ];
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.search');
    }
}
