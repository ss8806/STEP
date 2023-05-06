@extends('layouts.app')

@section('title')
ログイン
@endsection

@section('content')
<main class="l-main">
    <section class="p-card p-card--auth">
        <div class="p-card p-card__header">
            <p>ログイン</p>
        </div>

        <div class="p-card__body">
            <div class="p-form">
                <form method="POST" action="{{ route('login') }}" class="p-form">
                    @csrf
                    <label for="email" class="c-label">メールアドレス</label>
                    <div>
                        <input id="email" type="email" class="c-input p-form__input--auth  @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                    </div>
                    @error('email')
                    <div class="c-error" role="alert">
                        <strong>{{ $message }}</strong>
                    </div>
                    @enderror

                    <label for="password" class="c-label">パスワード</label>
                    <div class=c-input p-form__input--auth>
                        <input id="password" type="password" class="c-input p-form__input--auth @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                    </div>
                    @error('password')
                    <div class="c-error" role="alert">
                        <strong>{{ $message }}</strong>
                    </div>
                    @enderror

                    <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                    <span for="remember">
                        ログイン状態を保存する
                        </spna>

                        <div>
                            <button type="submit" class="c-btn--edit">
                                ログイン
                            </button>
                        </div>
                </form>
            </div>
        </div>

        <div class="p-card__footer">
            <div class="c-link">
                <p>アカウントをお持ちでない方は</p>
                <a href="{{ route('register') }}">こちら</a>
            </div>
            <div class="c-link">
                <p>パスワードをお忘れの方は</p>
                <a href="{{ route('password.request') }}">こちら</a>
            </div>
        </div>
    </section>
</main>
@endsection