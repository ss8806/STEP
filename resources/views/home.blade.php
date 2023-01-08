@extends('layouts.app')

@section('content')
<x-search></x-search>
<div class="p-card">
    <div class="c-flexbox--index">
        <div class="c-flexbox__flexcontainer c-flexbox__flexcontainer--index">
            @foreach ($stocks as $stock)
            <div class="c-flexbox__flexitem c-flexbox__flexitem--index">
                <div class="p-card p-card__header--index u-overflow">{{$stock->name}}</div>
                <div class="p-card__body">
                    <table class="p-tabßle p-table--index u-border__none--top">
                        <td>
                            <p>投稿日</p> {{ date('Y年m月d日', strtotime($stock->updated_at)) }}
                        </td>
                    </table>
                    <table class="p-table p-table--index u-border__none--top">
                        <td>{{number_format($stock->price)}}円</td>
                    </table>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>

<script src="{{ asset('js/app.js') }}"></script>
@endsection