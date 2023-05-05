@extends('layouts.app')

@section('title')
マイページ
@endsection

@section('content')
{{-- アイコン画像 --}}
    <img src="/images/avatar-default.svg" class="c-icon p-mypage__icon">
<button class="c-btn p-mypage__btn" type=“button” onclick="location.href='profile'">プロフィール編集</button>
<div id="posts" data-posts='{{ json_encode($posts) }}'></div>
<div 
    id="challenges" 
    data-challenges='{{ json_encode($challenges) }}'
    data-is_challenged="{{ json_encode($is_challenged) }}" 
></div>

@endsection