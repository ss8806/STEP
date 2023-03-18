@extends('layouts.app')

@section('title')
詳細
@endsection

@section('content')

<div id="detail" data-detail="{{ json_encode($detail) }}" "></div>

@endsection