<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Services\FileHandler;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ProjectController extends Controller
{
    //

    public function get(Request $request)
    {

        //get all projects for a user

        $userId = $request->user()->id;

        $projects = Project::where('user_id', $userId)->orderBy('updated_at', 'DESC')->get();

        return Inertia::render("Projects/Projects", ["projects" => $projects]);
    }

    public function delete(Request $request)
    {

        $userId = $request->user()->id;

        $data = $request->all();

        $projectId = $data['id'];

        $project = Project::where('user_id', $userId)->where('id', $projectId)->first();

        //delete using filehandler class

        FileHandler::deleteFile('projects', $project->image_path);


        if ($project) {
            $project->delete();
        }

        $projects = Project::where('user_id', $userId)->get();


        return Inertia::render("Projects/Projects", ["projects" => $projects]);
    }

    public function edit(Request $request, string $id)
    {

        $userId = $request->user()->id;

        $project = Project::where('user_id', $userId)->where('id', $id)->first();

        return Inertia::render("Projects/EditProject", ["project" => $project]);
    }

    public function patch(Request $request)
    {

        $userId = $request->user()->id;

        $data = $request->all();

        Log::info($data);

        $projectId = $data['data']['id'];

        $image = $data['data']['image'];

        $project = Project::where('user_id', $userId)->where('id', $projectId)->first();

        if ($image) {
            FileHandler::deleteFile('projects', $project->image_path);
            $return = FileHandler::saveFile($image, 'projects');
            $imagePath = $return['path'];
            $imageName = $return['filename'];
            $project->image_path = $imagePath;
            $project->image_name = $imageName;
        }


        $project->title = $data['data']['title'];
        $project->description = $data['data']['description'];
        $project->demo_link = $data['data']['demo_link'];
        $project->github_link = $data['data']['github_link'];

        $project->save();



        return redirect()->route('projects');
    }

    public function create(Request $request)
    {

        return Inertia::render("Projects/AddProject");
    }

    public function add(Request $request)
    {

        $userId = $request->user()->id;

        $project = new Project;

        $data = $request->all();

        $image = $data['data']['image'];

        $return = FileHandler::saveFile($image, 'projects');



        $project->user_id = $userId;
        $project->title = $data['data']['title'];
        $project->description = $data['data']['description'];
        $project->demo_link = $data['data']['demo_link'];
        $project->github_link = $data['data']['github_link'];
        $project->image_path = $return['path'];
        $project->image_name = $return['filename'];

        $project->save();

        return redirect()->route('projects');
    }
}
