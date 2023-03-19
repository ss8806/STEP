@extends('layouts.app')

@section('title')
詳細
@endsection

@section('content')

<div id="detail" data-detail="{{ json_encode($detail) }}" data-children="{{ json_encode($children) }}" data-is_liked="{{ json_encode($is_liked) }}"></div>

@endsection