@extends('layouts.app')

@section('title')
マイページ
@endsection

@section('content')
<!-- チャレンジ中のステップ一覧 -->
<div 
    id="challenges" 
    data-challenges='{{ json_encode($challenges) }}'
    data-is_challenged="{{ json_encode($is_challenged) }}" 
></div>
<!-- ページャー -->
<div class="c-pager">
  {{ $challenges->links() }}
</div>
@endsection