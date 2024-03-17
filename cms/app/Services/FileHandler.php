<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class FileHandler
{
    public static function saveFile(UploadedFile $file, $path)
    {
        $filename = $file->getClientOriginalName();
        $filePath = $file->store($path, "public");
        $publicPath = asset('storage/' . $filePath);

        return [
            'filename' => $filename,
            'path' => $publicPath
        ];
    }


    public static function deleteFile($assetUrl)
    {
        $path = str_replace(asset('storage/'), '', $assetUrl);
        Storage::disk('public')->delete($path);
    }
}
