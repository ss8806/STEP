@extends('layouts.app')

@section('content')
<x-search></x-search>

@isset($stocks)
            <div id="stock" data-stocks='{{ json_encode($stocks) }}'></div>
@endisset

<script src="{{ asset('js/app.js') }}"></script>
@endsection