@extends('layouts.app')

@section('title')
    ステップ投稿
@endsection

@section('content')
<div class="p-card--product">
        <div class="p-card p-card__header">
            <p>アイディアを投稿する</p>
        </div>

        <div class="p-card p-card__body">
            <form method="POST" action="{{ route('storeStep') }}" class="p-from">
                @csrf
                <div id="postStep"></div>
            </form>
        </div>
    </div>
@endsection