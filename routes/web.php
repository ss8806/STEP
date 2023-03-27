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

Route::view('/', 'top')->name('top');
Route::get('/steps', 'StepController@index')->name('steps');
Route::get('step/{id}/show', 'StepController@show')->name('showDetail');
Route::get('child/{id}/show', 'ChildController@show')->name('showChild');


Auth::routes();

Route::middleware('auth')
    ->group(function () {
        // step
        Route::get('/postStep', 'StepController@create')->name('postStep');
        Route::post('/storeStep', 'StepController@store')->name('storeStep');
        Route::get('/editStep/{id}', 'StepController@edit')->name('editStep');
        Route::post('/updateStep/{id}', 'StepController@update')->name('updateStep');
        // child
        Route::get('/postChild', 'ChildController@create')->name('postChild');
        Route::post('/storeChild', 'ChildController@store')->name('storeChild');

        // profile
        Route::get('/mypage', 'MypageController@index')->name('mypage');
        Route::get('/profile', 'ProfileController@index')->name('profile');
        Route::put('/editUserName', 'ProfileController@editUserName')->name('editUserName');
        Route::put('/editEmail', 'ProfileController@editEmail')->name('editEmail');
        Route::put('/editPassword', 'ProfileController@editPassword')->name('editPassword');
        // step/2/challenge 
        Route::put('/step/{step}/challenge', 'StepController@challenge')->name('challenge')->middleware('auth');
        Route::delete('/step/{step}/challenge', 'StepController@unchallenge')->name('unchallenge')->middleware('auth');
        // check
        Route::put('/child/{child}/check', 'ChildController@check')->name('check')->middleware('auth');
        Route::delete('/child/{child}/check', 'ChildController@uncheck')->name('uncheck')->middleware('auth');
    });
