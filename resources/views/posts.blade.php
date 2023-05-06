@extends('layouts.app')

@section('title')
マイページ
@endsection

@section('content')
<div id="posts" data-posts='{{ json_encode($posts) }}'></div>
@endsection