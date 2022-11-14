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
Route::get('/add', [crud::class, 'add']);
Route::post("/add", [crud::class, 'store']);
Route::get("/get_products", [crud::class, 'get_products']);


Route::get("/edit/{id}" , [crud::class , 'edit'])->where("id" , "[0-9]+");
Route::post("/edit/{id}" , [crud::class , 'update'])->where("id" , "[0-9]+");