@extends('layouts.app')

@section('content')
<div class="p-card">
        <div class="c-flexbox--index">
            <div class="c-flexbox__flexcontainer c-flexbox__flexcontainer--index">
                @foreach ($stocks as $stock)
                    <div class="c-flexbox__flexitem c-flexbox__flexitem--index">
                        <div class="p-card p-card__header--index u-overflow">{{$stock->name}}</div>
                    </div>
                @endforeach
            </div>
        </div>    
    </div> 

<script src="{{ asset('js/app.js') }}"></script>
@endsection