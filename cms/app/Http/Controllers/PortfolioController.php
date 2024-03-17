<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    //

    public function get(Request $request)
    {
        $userId = $request->user()->id;

        $portfolio = Portfolio::where('user_id', $userId)->first();

        return Inertia::render("Portfolio", ["portfolio" => $portfolio]);
    }

    public function put(Request $request)
    {
        $userId = $request->user()->id;
        $data = $request->all();
        $portfolioData = $request->file("data");

        // Check if portfolioData contains file
        if ($portfolioData && isset($portfolioData['file'])) {
            $file = $portfolioData['file'];
            if ($file instanceof UploadedFile) {
                Storage::deleteDirectory("public/portfolios");
                $storagePath = $file->store('portfolios', "public");
                $path = asset('storage/' . $storagePath);
            }
        } else {
            // Handle case where file is not provided
            $path = null;
        }

        $query = Portfolio::where('user_id', $userId)->first();

        if ($query) {
            // Update existing portfolio entry
            $query->name = isset($data['data']['name']) ? $data['data']['name'] : $query->name;
            $query->path = $path ?? $query->path;
            $query->save();
            $portfolio = $query;
        } else {
            // Create new portfolio entry
            $newEntry = new Portfolio;
            $newEntry->user_id = $userId;
            $newEntry->name = isset($data['data']['name']) ? $data['data']['name'] : null;
            $newEntry->path = $path;
            $newEntry->save();
            $portfolio = $newEntry;
        }

        return Inertia::render("Portfolio", ["portfolio" => $portfolio]);
    }
}
