<?php

namespace App\Http\Controllers;

use App\Models\CommunityExperience;
use App\Services\FileHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CommunityExpController extends Controller
{
    //

    public function get(Request $request)
    {
        $user = $request->user();
        $communityExp = $user->communityExperience;
        return Inertia::render("CommunityExperience/Get", ['communityExp' => $communityExp]);
    }

    public function edit(Request $request, string $id)
    {
        $communityExp = CommunityExperience::find($id);
        return Inertia::render('CommunityExperience/Edit', ['communityExp' => $communityExp]);
    }



    public function create(Request $request)
    {

        return Inertia::render('CommunityExperience/AddCommunityExperience');
    }

    public function add(Request $request)
    {
        $user = $request->user();

        $data = $request->all();

        $communityExp = new CommunityExperience;

        $communityExp->user_id = $user->id;
        $communityExp->title = $data['data']['title'];
        $communityExp->description = $data['data']['description'];


        $image = $data['data']['image'];
        if ($image) {
            $return = FileHandler::saveFile($image, "community");
        }

        $communityExp->image_path = $return['path'];

        $communityExp->save();
        return redirect()->route('community');
    }

    public function patch(Request $request)
    {

        $user = $request->user();

        $data = $request->all();

        $communityExp = CommunityExperience::where('id', $data['data']['id'])->first();

        $communityExp->title = $data['data']['title'];
        $communityExp->description = $data['data']['description'];


        $image = $data['data']['image'];

        if ($image) {
            FileHandler::deleteFile('community', $communityExp->image_path);
            $return = FileHandler::saveFile($image, "community");
            $communityExp->image_path = $return['path'];
        }

        $communityExp->save();

        return redirect()->route('community');
    }

    public function delete(Request $request)
    {

        $data = $request->all();
        $id = $data['id'];
        $communityExp = CommunityExperience::find($id);
        FileHandler::deleteFile('community', $communityExp->image_path);
        $communityExp->delete();
        return redirect()->route('community');
    }
}
