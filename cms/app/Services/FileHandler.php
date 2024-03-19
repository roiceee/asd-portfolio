<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class FileHandler
{
    public static function saveFile(UploadedFile $file, $path)
    {




        $url = Storage::putFile($path, $file);
        $filename = basename($url);
        $publicPath = Storage::url($url);

        return [
            'filename' => $filename,
            'path' => $publicPath
        ];
    }


    public static function deleteFile(string $path, string $filepath)
    {

        $filename = basename($filepath);
        Storage::delete($path . "/" . $filename);
    }
}
