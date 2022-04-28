<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
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
/*
Route::get('/', function () {
    return view('welcome');
});


Route::get('/hello', IndexController::class); */
Route::get('/', function () {
    return view('home');
});
Route::get('/garde', function () {
    return view('garde');
});
Route::get('/contact', function () {
    return view('contact');
});
Route::get('/blog', function () {
    return view('blog');
});
Route::get('/about', function () {
    return view('about');
});







/*
Route::get('/', [HomeController::class,'index']);
Route::get('/', [gardeController::class,'garde']);
Route::get('/', [contactController::class,'contact']);
Route::get('/', [blogController::class,'blog']);
Route::get('/', [aboutController::class,'about']);




Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/garde', [App\Http\Controllers\gardeController::class,'garde'])->name('garde');
Route::get('/contact', [App\Http\Controllers\contactController::class,'contact'])->name('contact');
Route::get('/blog', [App\Http\Controllers\blogController::class,'blog'])->name('blog');
Route::get('/about', [App\Http\Controllers\aboutController::class,'about'])->name('about');
*/
Auth::routes();