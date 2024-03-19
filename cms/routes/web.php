<?php

use App\Http\Controllers\BasicInfoController;
use App\Http\Controllers\CommunityExpController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TechstackController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/basicinfo', function (Request $request) {
    // pass to basicinfo controller

    return app()->make(BasicInfoController::class)->get($request);
})->middleware(['auth', 'verified'])->name('basicinfo');

Route::put('/basicinfo', function (Request $request) {
    // pass to basicinfo controller

    return app()->make(BasicInfoController::class)->put($request);
})->middleware(['auth', 'verified']);

Route::get('/portfolio', function (Request $request) {
    return app()->make(PortfolioController::class)->get($request);
})->middleware(['auth', 'verified'])->name('portfolio');


Route::put('/portfolio', function (Request $request) {

    return app()->make(PortfolioController::class)->put($request);
})->middleware(['auth', 'verified'])->name('portfolio/put');

Route::get('/projects', function (Request $request) {

    return app()->make(ProjectController::class)->get($request);
})->middleware(['auth', 'verified'])->name('projects');

Route::delete('/projects', function (Request $request) {

    return app()->make(ProjectController::class)->delete($request);
})->middleware(['auth', 'verified'])->name('projects/delete');

Route::get('/projects/edit/{id}', function (Request $request, string $id) {

    return app()->make(ProjectController::class)->edit($request, $id);
})->middleware(['auth', 'verified'])->name('projects/edit');

Route::put('/projects/edit', function (Request $request) {

    return app()->make(ProjectController::class)->patch($request);
})->middleware(['auth', 'verified'])->name('projects/edit');

Route::get('/projects/add', function (Request $request) {

    return app()->make(ProjectController::class)->create($request);
})->middleware(['auth', 'verified'])->name('projects/add');

Route::put('/projects/add', function (Request $request) {

    return app()->make(ProjectController::class)->add($request);
})->middleware(['auth', 'verified'])->name('projects/put');

Route::get('/community', function (Request $request) {

    return app()->make(CommunityExpController::class)->get($request);
})->middleware(['auth', 'verified'])->name('community');

Route::get('/community/add', function (Request $request) {

    return app()->make(CommunityExpController::class)->create($request);
})->middleware(['auth', 'verified'])->name('community/add');


Route::put('/community/add', function (Request $request) {

    return app()->make(CommunityExpController::class)->add($request);
})->middleware(['auth', 'verified'])->name('community/put');

Route::delete('/community/delete', function (Request $request) {

    return app()->make(CommunityExpController::class)->delete($request);
})->middleware(['auth', 'verified'])->name('community/delete');

Route::get('/community/edit/{id}', function (Request $request, string $id) {

    return app()->make(CommunityExpController::class)->edit($request, $id);
})->middleware(['auth', 'verified'])->name('community/edit');

Route::patch('/community/edit', function (Request $request) {

    return app()->make(CommunityExpController::class)->patch($request);
})->middleware(['auth', 'verified'])->name('community/edit');

Route::get('/techstack', function (Request $request) {

    return app()->make(TechstackController::class)->get($request);
})->middleware(['auth', 'verified'])->name('techstack');

Route::get('/techstack/add', function (Request $request) {

    return app()->make(TechstackController::class)->add($request);
})->middleware(['auth', 'verified'])->name('techstack/add');

Route::put('/techstack/add', function (Request $request) {

    return app()->make(TechstackController::class)->create($request);
})->middleware(['auth', 'verified'])->name('techstack/create');

Route::get('/techstack/edit/{id}', function (Request $request, string $id) {

    return app()->make(TechstackController::class)->edit($request, $id);
})->middleware(['auth', 'verified'])->name('techstack/edit');

Route::put('/techstack/edit', function (Request $request) {

    return app()->make(TechstackController::class)->patch($request);
})->middleware(['auth', 'verified'])->name('techstack/patch');

Route::delete('/techstack/delete', function (Request $request) {

    return app()->make(TechstackController::class)->delete($request);
})->middleware(['auth', 'verified'])->name('techstack/patch');


Route::get('/linkstorage', function () {
    Artisan::call('storage:link');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
