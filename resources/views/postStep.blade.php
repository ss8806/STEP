@extends('layouts.app')

@section('title')
ステップ投稿
@endsection

@section('content')
<div class="p-card p-card--step">
    <div class="p-card p-card__header">
        <p>ステップを投稿する</p>
    </div>
    <!-- ステップの投稿フォーム -->
    <div class="p-card p-card__body">
        <form method="POST" action="{{ route('storeStep') }}" class="p-from">
            @csrf
            <div 
            id="postStep" 
            data-errors="{{ $errors }}" 
            data-oldname="{{ json_encode($oldname) }}" 
            data-oldcontent="{{ json_encode($oldcontent) }}" 
            ></div>
        </form>
    </div>
</div>
@endsection

