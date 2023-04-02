@extends('layouts.app')

@section('title')
マイページ
@endsection

@section('content')
{{-- アイコン画像 --}}
<div class="c-avatar__mypage">
    <img src="/images/avatar-default.svg" class="c-avatar c-avatar__mypage">
</div>
<button class="c-btn c-btn__mypage" type=“button” onclick="location.href='profile'">プロフィール編集</button>

<div id="challenges" data-challenges='{{ json_encode($challenges) }}'></div>

<!-- <section class="p-list">
    <div class="p-card">
        <p class="c-title c-title__mypage"> チャレンジリスト</p>
        <a class="c-link__show--all" >全件表示する</a>
        <div class="c-flexbox--mypage">
            <div class="c-flexbox__flexcontainer">
                @foreach ($challenges as $challenge)
                <div class="c-flexbox__flexitem c-flexbox__flexitem--mypage">
                    <div class="p-card p-card__header--index u-overflow">{{$challenge->name}}</div>
                    <div class="p-card p-card__body">
                            <p class="">{{$challenge->name}}</p>
                            <p class="">{{$challenge->content}}</p>
                            <p>登録日<span class="u-br">{{ date('Y年m月d日', strtotime($challenge->updated_at)) }}</p>
                       
                        <div class="p-card__footer">
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
</section> -->

@endsection