{{-- 検索ボックス --}}
<div class="p-serch">
    <form class="p-form" method="GET" action="{{ route('home') }}">
        <div class="p-serch__group">
            <!-- 投稿日で検索 -->
            <span>投稿日検索　　</span>
            <span class="u-br"><!-- レスポンシブで改行 -->
                <input type="date" name="aboveday" class="c-input__day" value="{{$defaults['aboveday']}}">
                <span>~</span>
                <input type="date" name="belowday" class="c-input__day" value="{{$defaults['belowday']}}">
        </div>

        <!-- 検索ボタン -->
        <button type="submit" class="c-btn c-btn__serch">
            <i class="fas fa-search"></i>
        </button>
    </form>
</div>