@extends('layouts.top')

@section('title')
TOP
@endsection

@section('content')

<main class="p-top">
    <a href="{{ url('steps') }}">
        <!-- タイトルの画像 -->
        <img class="p-top__title" src="images/step.png" />
    </a>
    <p class="p-top__catch">あなたの人生のSTEPを共有しよう</p>
    <!-- 足跡の画像 -->
    <img class="p-top__stamp" src="images/stamp.png" />
    <ul class="p-top__menubar">
        <li><a href="{{route('register')}}" class="c-link">新規会員登録</a></li>
        <li><a href="{{route('login')}}" class="c-link">ログイン</a></li>
    </ul>
</main>

@endsection