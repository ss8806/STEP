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

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/home', 'HomeController@hpost')->name('hpost');

Route::middleware('auth')
      ->group(function () {
        Route::get('ideas/index', 'IdeasController@showIdeas')->name('idea.index');
        Route::get('ideas/{idea}', 'IdeasController@showIdeaDetail')->name('idea');
        Route::get('ideas/{idea}/bought', 'IdeasController@showIdeaDetail')->name('idea.bought');
        Route::get('ideas/{idea}/buy', 'IdeasController@showBuyIdeaForm')->name('idea.buy');
        Route::post('ideas/{idea}/buy', 'IdeasController@buyIdea')->name('idea.buy');
        Route::get('sell', 'SellController@showSellForm')->name('sell');
        Route::post('sell', 'SellController@sellIdea')->name('sell');
        Route::get('ideas/{idea}/edit', 'EditIdeaController@showEditForm')->name('edit');
        // Route::put('ideas/{idea}', 'EditIdeaController@editIdea')->name('update');
        Route::post('ideas/{idea}/put', 'EditIdeaController@editIdea')->name('update');
        Route::delete('ideas/{idea}/delete', 'EditIdeaController@destroyIdea')->name('delete');
        Route::get('ideas/{idea}/review', 'IdeasController@showIdeaReview')->name('idea.review');
        Route::get('ideas/{idea}/content', 'ContentController@showContent')->name('idea.content');
        Route::post('ideas/{idea}/review', 'ContentController@review')->name('review');
        
    });