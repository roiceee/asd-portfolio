<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    protected $primaryKey = 'id';

    protected $fillable = ['user_id', 'title', 'description', 'demo_link', 'github_link', 'image_path', 'image_name'];

    // add default values to attributes

    protected $attributes = [
        'user_id' => '',
        'title' => '',
        'description' => '',
        'demo_link' => '',
        'github_link' => '',
        'image_path' => '',
        'image_name' => '',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
