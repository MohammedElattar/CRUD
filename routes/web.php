<?php

use App\Http\Controllers\crud;
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


Route::get("/", [crud::class, 'index'])->name('products');
Route::get("/add", [crud::class, 'index'])->name('products');
// Route::get("/products/add", [crud::class, 'add'])->name("add-product");
Route::post('/add', [crud::class, 'store']);
