<div class="p-search">
    {{-- 検索ボックス --}}
    <form class="p-form" method="GET" action="{{ route('steps') }}">
        <div id="search"
        data-aboveday="{{ json_encode(Request::input('aboveday', '')) ?? ''  }}"
        data-belowday="{{ json_encode(Request::input('belowday', '')) ?? '' }}"
        >
        </div>
    </form>

    @error('aboveday')
    <div class="c-error" role="alert">
        <strong>{{ $message }}</strong>
    </div>
    @enderror
    @error('belowday')
    <div class="c-error" role="alert">
        <strong>{{ $message }}</strong>
    </div>
    @enderror
</div>