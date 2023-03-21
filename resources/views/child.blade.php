@extends('layouts.app')

@section('title')
詳細
@endsection

@section('content')
<div id="child" data-child="{{ json_encode($child) }}" data-is_checked="{{ json_encode($is_checked) }}" data-show="{{ json_encode($show) }}"></div>
@endsection