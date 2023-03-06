@extends('layouts.app')

@section('title')
詳細
@endsection

@section('content')

<div id="detail" data-detail="{{ json_encode($detail) }}" data-is_liked="{{ json_encode($is_liked) }}"></div>

<?php
// var_dump($detail->name);
// var_dump($initial_is_liked);
?>
@endsection