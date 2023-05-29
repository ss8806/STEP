@extends('layouts.app')

@section('title')
詳細
@endsection

@section('content')
<!-- 子ステップの詳細 -->
<div 
  id="child" 
  data-child="{{ json_encode($child) }}" 
  data-is_checked="{{ json_encode($is_checked) }}" 
  data-show="{{ json_encode($show) }}"
  data-step="{{ json_encode($step) }}"
  data-auth="{{ json_encode(Auth::user()) }}"
>
</div>
@endsection