@extends('layouts.top')

@section('title')
TOP
@endsection

@section('content')

<main class="p-top">
    <img class="p-top__logo" src="images/step.png" srcset="images/step.png 1x, images/logo2@2x.png 2x" alt="STEP" />
    <img class="p-top__logo" src="images/stamp.png" srcset="images/stamp.png 1x, images/logo2@2x.png 2x" alt="STEP" />
    <ul class="p-top__menubar">
        <li><a href="{{route('register')}}" class="c-link">新規会員登録</a></li>
        <li><a href="{{route('login')}}" class="c-link">ログイン</a></li>
    </ul>
</main>

@endsection