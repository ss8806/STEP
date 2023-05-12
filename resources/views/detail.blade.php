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

<!-- <div class="c-twitter">
  <a href="https://twitter.com/intent/tweet?button_hashtag=ステップ&ref_src=twsrc%5Etfw" 
  class="twitter-hashtag-button"  data-show-count="false">Tweet #ステップ</a>
  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div> -->

@endsection