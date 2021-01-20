<?php

use Illuminate\Routing\Router;
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

Route::group(
    [
        'namespace' => 'App\Http\Controllers',
        'prefix' => 'auth'
    ],
    function(Router $router) {
//        $router->post('login', 'AuthController@login');
        $router->post('login', fn() => ['test data', 12345]);
    }
);

//Route::get('test', fn() => ['test data', 12345]);
