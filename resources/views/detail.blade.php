@extends('layouts.app')

@section('title')
詳細
@endsection

@section('content')


<div 
  id="detail" 
  data-step="{{ json_encode($step) }}" 
  data-children="{{ json_encode($children) }}" 
  data-is_challenged="{{ json_encode($is_challenged)}}" 
  data-is_checked="{{ json_encode($is_checked) }}" 
  data-auth="{{ json_encode(Auth::user()) }}"
  data-currentpage="{{ $children->currentPage() }}"
></div>

<div class="c-pager">
  {{ $children->appends(request()->input())->links() }}
</div>

@endsection