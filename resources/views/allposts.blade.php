@extends('layouts.app')

@section('title')
マイページ
@endsection

@section('content')
<div id="allposts" data-allposts='{{ json_encode($allposts) }}'></div>

<?php
// var_dump($allposts);
?>
@endsection