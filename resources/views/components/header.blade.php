<header class="l-header l-header__base">
    <nav class="p-nav">

        <div class="p-nav--left">
            <a href="{{ url('steps') }}">
                <div class="c-title p-header__main">STEP</div>
            </a>
        </div>

        <div class="p-nav p-nav--right">
            <ul class="p-nav p-nav__menu">
                @guest
                <li>
                    <img src="/images/avatar-default.svg" class="c-icon p-header__icon">
                </li>
                <li>ゲストユーザー</li>
                <li>
                    <a class="p-nav__menu" href="{{ route('login') }}">ログイン</a>
                </li>
                @else
                <li>
                    @if (!empty(Auth::user()->icon))
                    <img src="https://backend1219.s3.ap-northeast-1.amazonaws.com/{{Auth::user()->icon}}" class="c-icon">
                    @else
                    <img src="/images/avatar-default.svg" class="c-icon">
                    @endif
                </li>
                <li>ようこそ {{ Auth::user()->name }}様</li>
                <li><a class="p-nav__menu" href="{{ route('mypage') }}">マイページ</a></li>
                <li><a class="p-nav__menu" href="{{ route('postStep') }}">投稿する</a></li>
                <li><a class="p-nav__menu" href="{{ route('logout') }}" onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
                        ログアウト
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                </li>
                @endguest
            </ul>

            {{-- ハンバーガーメニュー（レスポンシブ用） --}}
            <div class="p-nav p-nav__hamberger">
                @guest
                @else
                <div id="hamberger" data-user="{{ json_encode(Auth::user()->name) }}" data-logout="{{ json_encode(route('logout')) }}"></div>
                @endguest
            </div>
        </div>
    </nav>
</header>