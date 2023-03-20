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

Route::view('/', 'top', ['name' => 'top']);
Route::get('/steps', 'StepController@index')->name('steps');
Route::post('/steps', 'StepController@hpost')->name('hpost');

Auth::routes();

Route::middleware('auth')
    ->group(function () {
        Route::get('step/{id}/show', 'StepController@show')->name('showDetail');
        Route::get('child/{id}/show', 'ChildController@show')->name('showChild');
        Route::get('/mypage', 'MypageController@index')->name('mypage');
        Route::get('/profile', 'ProfileController@index')->name('profile');
        Route::put('/editUserName', 'ProfileController@editUserName')->name('editUserName');
        Route::put('/editEmail', 'ProfileController@editEmail')->name('editEmail');
        Route::put('/editPassword', 'ProfileController@editPassword')->name('editPassword');
        // step/2/challenge 
        Route::put('/step/{step}/challenge', 'StepController@challenge')->name('challenge')->middleware('auth');
        Route::delete('/step/{step}/challenge', 'StepController@unchallenge')->name('unchallenge')->middleware('auth');
        // like
        Route::put('/child/{child}/like', 'ChildController@like')->name('like')->middleware('auth');
        Route::delete('/child/{child}/like', 'ChildController@unlike')->name('unlike')->middleware('auth');
    });
