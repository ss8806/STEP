@extends('layouts.app')

@section('title')
マイページ
@endsection

@section('content')
{{-- アイコン画像 --}}
@if (!empty(Auth::user()->icon))
    <img class="c-icon p-mypage__icon" src="https://backend1219.s3.ap-northeast-1.amazonaws.com/{{Auth::user()->icon}}" >
@else
    <img class="c-icon p-mypage__icon" src="/images/avatar-default.svg" srcset="images/avatar-default.svg 1x, images/avatar-default@2x.svg 2x" >
@endif
<button class="c-btn p-mypage__btn" type=“button” onclick="location.href='profile'">プロフィール編集</button>

<div id="posts" data-posts='{{ json_encode($posts) }}'></div>
<a class="c-link p-mypage__link"  href="{{ route('allPosts') }}">投稿したSTEP一覧へ</a>

<div 
    id="challenges" 
    data-challenges='{{ json_encode($challenges) }}'
    data-is_challenged="{{ json_encode($is_challenged) }}" 
></div>
<a class="c-link p-mypage__link"  href="{{ route('allChallenges') }}">チャレンジ中のSTEP一覧へ</a>
@endsection