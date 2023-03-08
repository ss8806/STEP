@extends('layouts.top')

@section('title')
    TOP
@endsection

@section('content')
<main class="l-main l-main__base">
    <div class="p-card--top">
        <div class="p-card__header">
            <div class="c-title__top">Sample2212</div>
            <p style="font-size: 18px;">sample<span class="u-br">2212</p>
        </div>

        <div class="p-card__body">
            <div class="c-link">
                <a href="{{route('register')}}" class="c-link__signup">新規会員登録</a>
            </div>

            <p>既に会員の方はこちら</p>

            <div class="c-link">
                    <a href="{{route('login')}}" class="c-link__login">ログイン</a>
            </div>
        </div>
    </div>
</main>
@endsection