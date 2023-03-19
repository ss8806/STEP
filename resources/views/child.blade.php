@extends('layouts.app')

@section('title')
詳細
@endsection

@section('content')
<div id="child" data-child="{{ json_encode($child) }}" data-is_liked="{{ json_encode($is_liked) }}"></div>
@endsection