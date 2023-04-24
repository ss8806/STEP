@extends('layouts.app')

@section('title')
マイページ
@endsection

@section('content')
{{-- アイコン画像 --}}
<div class="c-avatar__mypage">
    <img src="/images/avatar-default.svg" class="c-avatar c-avatar__mypage">
</div>
<button class="c-btn c-btn__mypage" type=“button” onclick="location.href='profile'">プロフィール編集</button>
<div id="posts" data-posts='{{ json_encode($posts) }}'></div>
<div 
    id="challenges" 
    data-challenges='{{ json_encode($challenges) }}'
    data-is_challenged="{{ json_encode($is_challenged) }}" 
></div>

<?php 
// var_dump($is_challenged);
?>

@endsection