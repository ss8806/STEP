{{-- 検索ボックス --}}
<div class="p-serch">
    <form class="p-form" method="GET" action="{{ route('home') }}">
        <div id="search" 
        data-aboveday="{{ json_encode($defaults['aboveday']) }}"
        data-belowday="{{ json_encode($defaults['belowday']) }}"
        data-aboveprice="{{ json_encode($defaults['aboveprice']) }}"
        data-belowprice="{{ json_encode($defaults['belowprice']) }}"
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
