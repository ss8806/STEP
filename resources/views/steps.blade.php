@extends('layouts.app')

@section('content')
<x-search></x-search>

<div id="step" data-steps='{{ json_encode($steps) }}'></div>

<script src="{{ asset('js/app.js') }}"></script>

<!-- ページャー  検索結果を保持したままページネーション  -->
<div class="c-pager">
  {{ $steps->appends(request()->input())->links() }}
</div>

@endsection