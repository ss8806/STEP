@extends('layouts.app')

@section('content')
<x-search></x-search>

@isset($steps)
<div id="step" data-steps='{{ json_encode($steps) }}'></div>
@endisset

<form method="POST" action="{{ route('hpost') }}" class="p-from">
    @csrf
    <div class="p-form__group">
        <button type="submit" class="c-btn">投稿する</button>
    </div>
</form>

<script src="{{ asset('js/app.js') }}"></script>
@endsection