@extends('layouts.app')

@section('title')
マイページ
@endsection

@section('content')
<!-- 投稿したステップ一覧 -->
<div id="posts" data-posts='{{ json_encode($posts) }}'></div>
<!-- ページャー -->
<div class="c-pager">
  {{ $posts->links() }}
</div>
@endsection