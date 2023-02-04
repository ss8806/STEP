@extends('layouts.app')

@section('title')
プロフィール編集
@endsection

@section('content')
<div class="p-card--scaff">
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
        {{-- ニックネーム --}}
        <div class="p-form p-form__group">
            <label for="name">ニックネーム:</label>
            <span class="u-br"><!-- レスポンシブで改行 -->
                {{$user->name}}
                <span class="u-br"><!-- レスポンシブで改行 -->
                    <button id="name" class="c-btn" type=“button” onclick="location.href='edit-name'">編集</button>
        </div>

        {{-- email --}}
        <div class="p-form p-form__group">
            <div id="editEmail" data-email="{{ json_encode(Auth::user()->email) }}"></div>
        </div>
        
        {{-- password --}}
        <div class="p-form p-form__group">
            <div id="editPassword"></div>
        </div>
    </div>
</div>


@endsection