<?php

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'App\Http\Controllers'], function(Router $router) {
    $router->post('offers', 'LoanController@getOffers');
    $router->put('loan-request', 'LoanController@loanRequest');
    $router->get('test', fn() => 'test string');

    $router->group(['prefix' => 'admin'], function (Router $router) {
        $router->get('banks', 'BankController@get');
    });
});
