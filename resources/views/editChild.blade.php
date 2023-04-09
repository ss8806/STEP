@extends('layouts.app')

@section('title')
ステップ投稿
@endsection

@section('content')

<div class="p-card p-card--step">
    <div class="p-card p-card__header">
        <p>子ステップを編集する</p>
    </div>

    <div class="p-card p-card__body">
        <form method="POST" action="{{ route('updateChild', $child->id) }}" class="p-from">
            @csrf
            <div 
            id="editChild"
            data-child="{{ $child }}" 
            data-step="{{ $step }}" 
            data-errors="{{ $errors }}" 
            ></div>
        </form>
    </div>
</div>
@endsection

