<?php

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'App\Http\Controllers'], function(Router $router) {
    $router->post('loans/offers', 'LoanController@getOffers');
    $router->put('loans', 'LoanController@create');

    $router->group(['prefix' => 'admin'], function (Router $router) {
        $router->get('banks', 'BankController@getAll');
        $router->get('loans', 'LoanController@getAll');
    });
});
