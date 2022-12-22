@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div>
        <div class="container py-5">
            <div id="example"></div>
        </div>
        <!-- @isset($meetings)
            <div id="calendar" data-calendar-meetings="{{ $meetings }}" data-user="{{ json_encode(Auth::user()->name) }}"></div>
        @endisset -->

        @isset($stocks)
        <div id="stock" data-stocks='{{ $stocks }}'></div>
        @endisset
    </div>
   
</div>

<script src="{{ asset('js/app.js') }}"></script>
@endsection