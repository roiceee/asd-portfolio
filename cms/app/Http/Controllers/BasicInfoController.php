<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\BasicInfo;
use App\Services\FileHandler;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class BasicInfoController extends Controller
{
    public function get(Request $request)
    {
        // get data from BasicInfo Model by UserId

        $user_id = $request->user()->id;
        $basic_info = BasicInfo::where('user_id', $user_id)->first();

        return Inertia::render('BasicInfo', [
            'basic_info' => $basic_info,
        ]);
    }

    public function put(Request $request)
    {
        // Get request data
        $requestData = $request->all();

        // Get the uploaded file from the request
        $file = $request->file('data.image_data');

        // Check if a file is provided
        if ($file !== null) {
            Storage::deleteDirectory('basicinfo');
            $return = FileHandler::saveFile($file, 'basicinfo');
            $requestData['data']['image_path'] = $return['path'];
        }

        // Find the BasicInfo model instance based on the user ID
        $basicInfo = BasicInfo::where('user_id', $request->user()->id)->first();

        if ($basicInfo) {
            // If a file is provided, update the image path; otherwise, keep the existing path
            if ($file !== null) {
                $basicInfo->update($requestData['data']);
            } else {
                unset($requestData['data']['image_path']); // Remove image_path from data to avoid updating it
                $basicInfo->update($requestData['data']);
            }
        } else {
            // Create new BasicInfo instance if not found
            $basicInfo = new BasicInfo;
            $basicInfo->user_id = $request->user()->id;
            $basicInfo->fill($requestData['data']);
            $basicInfo->save();
        }

        // Return updated data to the frontend
        return redirect()->route('basicinfo');
    }
}
