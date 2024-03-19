<?php

use App\Models\BasicInfo;
use App\Models\CommunityExperience;
use App\Models\Portfolio;
use App\Models\Project;
use App\Models\Techstack;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('basicinfo', function () {

    $basicInfo = BasicInfo::all()->first();

    return response()->json($basicInfo);
});

Route::get('portfolio', function () {

    $portfolio = Portfolio::all()->first();

    return response()->json($portfolio);
});

Route::get('projects', function () {

    $projects = Project::all();

    return response()->json($projects);
});

Route::get('community', function () {

    $community = CommunityExperience::all();

    return response()->json($community);
});

Route::get('techstack', function () {

    $techstack = Techstack::orderBy('order')->get();

    return response()->json($techstack);
});
