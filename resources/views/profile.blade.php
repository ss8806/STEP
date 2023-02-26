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
            <div id="editUserName" data-username="{{ json_encode(Auth::user()->name) }}"></div>
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