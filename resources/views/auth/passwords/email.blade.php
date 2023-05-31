@extends('layouts.app')

@section('title')
    パスワードリセット
@endsection

@section('content')
<main class="l-main l-main__base">
    <div class="p-card p-card--auth">
        <div class="p-card__header">
            <p>パスワードをお忘れの方</p>
        </div>

        <div class="p-card__body">
            <form method="POST" action="{{ route('password.email') }}" class="p-card__form">
                @csrf
                <div class="p-form">
                    <label for="email" class="c-label">メールアドレス</label>
                    <div>
                        <input id="email" type="email" class="c-input p-form__input--auth @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="mail">
                    </div>
                    @error('email')
                        <div class="c-error" role="alert">
                            <strong>{{ $message }}</strong>
                        </div>
                    @enderror
                </div>

                <div class="p-form">
                    <button type="submit" class="c-btn--edit">
                        送信する
                    </button>
                </div>
            </form>
        </div>
    </div>
</main>
@endsection
