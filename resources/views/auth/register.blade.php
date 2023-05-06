@extends('layouts.app')

@section('title')
会員登録
@endsection

@section('content')
<main class="l-main">
    <div class="p-card p-card--auth">
        <div class="p-card p-card__header">
            <p>会員情報登録</p>
        </div>

        <div class="p-card__body">
            <form method="POST" action="{{ route('register') }}" class="p-form">
                @csrf
                <label for="name" class="c-label">ニックネーム</label>
                <div>
                    <input id="name" type="text" class="c-input p-form__input--auth @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="お名前">
                </div>
                @error('name')
                <div class="c-error" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror

                <label for="email">メールアドレス</label>
                <div>
                    <input id="email" type="email" class="c-input p-form__input--auth @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="メールアドレス">
                </div>
                @error('email')
                <div class="c-error" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror

                <label for="password" class="c-form__label">パスワード</label>
                <div>
                    <input id="password" type="password" class="c-input p-form__input--auth @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="パスワード">
                </div>
                @error('password')
                <div class="c-error" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror

                <div>
                    <button type="submit" class="c-btn--edit ">
                        会員登録
                    </button>
                </div>

            </form>
        </div>

        <div class="p-card__footer">
            <span>アカウントをお持ちの方は</span>
            <a href="{{ route('login') }}">こちら</a>
        </div>
    </div>
</main>
@endsection