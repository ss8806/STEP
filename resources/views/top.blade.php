@extends('layouts.top')

@section('title')
TOP
@endsection

@section('content')

<header class="p-top__header">
    <img class="p-top__logo" src="images/logo.png" srcset="images/logo.png 1x, images/logo2@2x.png 2x" alt="SAMPLE COMPANY" />
    <ul class="p-top__menubar">
        <li><a href="{{route('register')}}" class="c-link__signup">新規会員登録</a></li>
        <li><a href="{{route('login')}}" class="c-link__login">ログイン</a></li>
    </ul>
</header>


<!-- <footer>
    <small>Copyright&copy; <a href="index.html">SAMPLE COMPANY</a> All Rights
        Reserved.</small>
    <span class="pr">《<a href="https://template-party.com/" target="_blank">Web Design:Template-Party</a>》</span>
</footer> -->
@endsection