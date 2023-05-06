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
Route::get('steps', 'StepController@index')->name('steps');
Route::get('step/{id}/show', 'StepController@show')->name('showDetail');
Route::get('child/{id}/show', 'ChildController@show')->name('showChild');


Auth::routes();

Route::middleware('auth')
    ->group(function () {
        // step
        Route::get('postStep', 'StepController@create')->name('postStep');
        Route::post('storeStep', 'StepController@store')->name('storeStep');
        Route::get('step/{id}/edit', 'StepController@edit')->name('editStep');
        Route::post('step/{id}/update', 'StepController@update')->name('updateStep');
        Route::post('step/{id}/delete', 'StepController@destroy')->name('deleteStep');
        // child
        Route::get('/postChild/{id}', 'ChildController@create')->name('postChild');
        Route::post('/storeChild{id}', 'ChildController@store')->name('storeChild');
        Route::get('child/{id}/edit', 'ChildController@edit')->name('editChild');
        Route::post('child/{id}/update', 'ChildController@update')->name('updateChild');
        // mypage
        Route::get('/mypage', 'MypageController@index')->name('mypage');
        Route::get('/allPosts', 'MypageController@allposts')->name('allposts');
        Route::get('/allChallenges', 'MypageController@allChallenges')->name('allChallenges');
        // profile
        Route::get('/profile', 'ProfileController@index')->name('profile');
        Route::put('/editIcon', 'ProfileController@editIcon')->name('editIcon');
        Route::put('/editProduce', 'ProfileController@editProduce')->name('editProduce');
        Route::put('/editEmail', 'ProfileController@editEmail')->name('editEmail');
        // challenge 
        Route::put('/step/{step}/challenge', 'StepController@challenge')->name('challenge')->middleware('auth');
        Route::delete('/step/{step}/challenge', 'StepController@unchallenge')->name('unchallenge')->middleware('auth');
        // check
        Route::put('/child/{child}/check', 'ChildController@check')->name('check')->middleware('auth');
        Route::delete('/child/{child}/check', 'ChildController@uncheck')->name('uncheck')->middleware('auth');
    });
