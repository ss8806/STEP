@extends('layouts.app')

@section('title')
詳細
@endsection

@section('content')

<div id="detail" data-step="{{ json_encode($step) }}" data-children="{{ json_encode($children) }}" data-is_challenged="{{ json_encode($is_challenged)}}" ></div>

@endsection