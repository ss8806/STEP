{{-- 検索ボックス --}}
<div class="p-search">
    <form class="p-form" method="GET" action="{{ route('steps') }}">
        <div id="search" 
        data-aboveday="{{ json_encode($defaults['aboveday']) }}"
        data-belowday="{{ json_encode($defaults['belowday']) }}"
        >
        </div>
    </form>

    @error('aboveprice')
    <div class="c-error" role="alert">
        <strong>{{ $message }}</strong>
    </div>
    @enderror
    @error('belowprice')
    <div class="c-error" role="alert">
        <strong>{{ $message }}</strong>
    </div>
    @enderror
</div>
