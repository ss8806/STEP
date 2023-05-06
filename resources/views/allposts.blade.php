@extends('layouts.app')

@section('title')
マイページ
@endsection

@section('content')
<div id="posts" data-posts='{{ json_encode($posts) }}'></div>

<div class="c-pager">
  {{ $posts->links() }}
</div>
@endsection