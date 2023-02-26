<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::middleware('auth')
    ->group(function () {
        // Route::get('/home', 'HomeController@index')->name('home');
        Route::get('/home', 'StockController@index')->name('home');
        Route::post('/home', 'HomeController@hpost')->name('hpost');
        Route::get('/mypage', 'MypageController@index')->name('mypage');
        Route::get('/profile', 'ProfileController@index')->name('profile');
        Route::put('/editUserName', 'ProfileController@editUserName')->name('editUserName');
        Route::put('/editEmail', 'ProfileController@editEmail')->name('editEmail');
        Route::put('/editPassword', 'ProfileController@editPassword')->name('editPassword');

    });
