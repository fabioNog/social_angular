<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/','PostController@index');
Route::post('/','PostController@store');
Route::delete('/{id}','PostController@destroy');
Route::get('/likes/{id}','PostController@likes');
