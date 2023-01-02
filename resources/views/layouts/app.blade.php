<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <x-header></x-header>
        <main class="py-4">
            @yield('content')
        </main>

        @if (session('scc_message'))
        <div id="message" data-message="{{ json_encode(session('scc_message')) }}">
        </div>
        @endif

        @if (session('err_message'))
        <div id="message" class="p-message__container p-message__container--error">
            <i class="fas fa-exclamation-circle p-message__icon"></i>
            <div class="p-message__text">
                <p>{{session('err_message')}}</p>
            </div>
        </div>
        @endif
        <!-- フラッシュメッセージここまで -->
    </div>
</body>

</html>