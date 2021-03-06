<?php

use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

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

Route::get('/', fn () => Inertia::render('Dashboard/Index'))->name('dashboard');

Route::get('/framework/step1', fn () => Inertia::render('UseFramework/Index'));
Route::get('/solid/step-1', fn () => Inertia::render('Solid/Step1'));
