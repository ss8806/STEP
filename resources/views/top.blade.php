@extends('layouts.top')

@section('title')
TOP
@endsection

@section('content')

<main class="p-top">
    <a href="{{ url('steps') }}">
        <!-- タイトルの画像 -->
        <img class="p-top__title" src="images/step.png" srcset="images/step.png 1x, images/step@2x.png 2x"/>
    </a>
    <p class="p-top__catch">あなたの人生のSTEPを共有しよう</p>
    <!-- 足跡の画像 -->
    <img class="p-top__stamp" src="images/stamp.png" srcset="images/stamp.png 1x, images/stamp@2x.png 2x" />
    <ul class="p-top__menubar">
        <li><a href="{{route('register')}}" class="c-link">新規会員登録</a></li>
        <li><a href="{{route('login')}}" class="c-link">ログイン</a></li>
    </ul>
</main>

@endsection