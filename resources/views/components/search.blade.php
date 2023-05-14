{{-- 検索ボックス --}}
<div class="p-search">
    <form class="p-form" method="GET" action="{{ route('steps') }}">
        <div id="search"
        data-aboveday="{{ json_encode(['aboveday']) ?? ''  }}"
        data-belowday="{{ json_encode(['belowday']) ?? '' }}"
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