@extends('layouts.app')

@section('title')
マイページ
@endsection

@section('content')
<div id="allPosts" data-allposts='{{ json_encode($allPosts) }}'></div>
@endsection