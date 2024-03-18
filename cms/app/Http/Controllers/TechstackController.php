<?php

namespace App\Http\Controllers;

use App\Models\Techstack;
use App\Services\FileHandler;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TechstackController extends Controller
{
    //

    public function get(Request $request)
    {

        $techstacks = Techstack::where('user_id', $request->user()->id)->orderBy('order')->get();

        return Inertia::render("Techstack/Get", ["techstacks" => $techstacks]);
    }

    public function add(Request $request)
    {


        return Inertia::render("Techstack/Add");
    }

    public function create(Request $request)
    {


        $data = $request->all();

        $newTechstack = new Techstack;


        $image = $data['data']['image'];

        if ($image) {
            $return = FileHandler::saveFile($image, "techstack");
        }

        $newTechstack->user_id = $request->user()->id;
        $newTechstack->name = $data['data']["name"];
        $newTechstack->image_path = $return['path'];
        $newTechstack->order = 1;

        $newTechstack->save();


        return redirect()->route("techstack");
    }

    public function edit(Request $request, string $id)
    {


        return Inertia::render("Techstack/Edit", ["techstack" => Techstack::where('id', $id)->first()]);
    }

    public function patch(Request $request)
    {


        $data = $request->all();

        $newTechstack = Techstack::where('id', $data['data']['id'])->first();

        $image = $data['data']['image'];

        if ($image) {
            FileHandler::deleteFile($newTechstack->image_path);
            $return = FileHandler::saveFile($image, "techstack");
            $newTechstack->image_path = $return['path'];
        }

        $newTechstack->user_id = $request->user()->id;
        $newTechstack->name = $data['data']["name"];
        $newTechstack->order = $data['data']['order'];

        $newTechstack->save();


        return redirect()->route("techstack");
    }
}
