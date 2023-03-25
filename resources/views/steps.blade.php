@extends('layouts.app')

@section('content')
<x-search></x-search>

@isset($steps)
<div id="step" data-steps='{{ json_encode($steps) }}'></div>
@endisset

<script src="{{ asset('js/app.js') }}"></script>
@endsection