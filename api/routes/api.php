<?php

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'App\Http\Controllers'], function(Router $router) {
    $router->post('offers', 'LoanController@getOffers');
    $router->put('loan-request', 'LoanController@loanRequest');

    $router->group(['prefix' => 'admin'], function (Router $router) {
        $router->get('banks', 'BankController@get');
        $router->get('people', 'PersonController@get');
        $router->get('loans', 'LoanController@get');
    });
});
