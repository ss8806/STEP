@extends('layouts.app')

@section('title')
    マイページ
@endsection

@section('content')
    <div class="c-session">
        @if (session('scc_message'))
                <div class="alert alert-success" role="alert">
                    {{ session('scc_message') }}
                </div>
        @endif
    </div>

    {{-- アイコン画像 --}}
    <div class="c-avatar__mypage">
        <img src="/images/avatar-default.svg" class="c-avatar c-avatar__mypage">
    </div>
    <button class="c-btn c-btn__mypage" type=“button” onclick="location.href='edit-profile'">プロフィール編集</button>

@endsection