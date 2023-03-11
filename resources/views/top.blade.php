@extends('layouts.top')

@section('title')
TOP
@endsection

@section('content')
<header>
    <h1 id="logo">
        <a href="index.html"><img src="images/logo.png" alt="SAMPLE COMPANY" /></a>
    </h1>
    <nav id="menubar">
        <ul>
            <li><a href="#service">Service</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>
<footer>
    <small>Copyright&copy; <a href="index.html">SAMPLE COMPANY</a> All Rights
        Reserved.</small>
    <span class="pr">《<a href="https://template-party.com/" target="_blank">Web Design:Template-Party</a>》</span>
</footer>
@endsection