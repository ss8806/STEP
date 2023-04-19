@extends('layouts.app')

@section('title')
ステップ投稿
@endsection

@section('content')
<div class="p-card p-card--step">
    <div class="p-card p-card__header">
        <p>アイディアを編集する</p>
    </div>

    <div class="p-card p-card__body">
        <form method="POST" action="{{ route('updateStep', $step->id) }}" class="p-from">
            @csrf
            <div id="editStep" data-errors="{{ $errors }}" data-step="{{ json_encode($step) }}"></div>
        </form>
        <form method="POST" action="{{ route('deleteStep', $step->id) }}" class="p-from">
            @csrf
            <div id="dialog"
            data-message="{{ json_encode($message) }}"
            data-consent="{{ json_encode($consent) }}"
            ></div>
        </form>
    </div>
</div>
@endsection