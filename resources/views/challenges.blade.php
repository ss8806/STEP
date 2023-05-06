@extends('layouts.app')

@section('title')
マイページ
@endsection

@section('content')
<div 
    id="challenges" 
    data-challenges='{{ json_encode($challenges) }}'
    data-is_challenged="{{ json_encode($is_challenged) }}" 
></div>

@endsection