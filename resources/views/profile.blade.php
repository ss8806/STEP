@extends('layouts.app')

@section('title')
プロフィール編集
@endsection

@section('content')
<div class="p-card p-card--profile">
    @if (session('status'))
    <div class="c-session" role="alert">
        {{ session('status') }}
    </div>
    @endif
    <div class="p-card__header">プロフィール編集</div>
    @csrf
    <div class="p-card__body">
        {{-- アイコン --}}
        <div id="editIcon" data-icon="{{ json_encode(Auth::user()->icon) }}"></div>
        {{-- 自己紹介 --}}
        <div id="editProduce" data-produce="{{ json_encode(Auth::user()->produce) }}"></div>
        {{-- email --}}
        <div id="editEmail" data-email="{{ json_encode(Auth::user()->email) }}"></div>
    </div>
</div>

@endsection