@extends('layouts.app')

@section('title')
プロフィール編集
@endsection

@section('content')
<div class="p-card p-card--profile">
    <div class="c-session">
        @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
        @endif
    </div>
    <div class="p-card p-card__header">プロフィール編集</div>
    @csrf
    <div class="p-card p-card__body">
        {{-- アイコン --}}
        <div class="p-form p-form__group">
            <div id="editIcon" data-icon="{{ json_encode(Auth::user()->icon) }}"></div>
        </div>
        {{-- 自己紹介 --}}
        <div class="p-form p-form__group">
            <div id="editProduce" data-produce="{{ json_encode(Auth::user()->produce) }}"></div>
        </div>
        {{-- email --}}
        <div class="p-form p-form__group">
            <div id="editEmail" data-email="{{ json_encode(Auth::user()->email) }}"></div>
        </div>
    </div>
</div>

@endsection