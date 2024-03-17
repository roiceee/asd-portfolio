<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BasicInfo extends Model
{
    use HasFactory;

    protected $table = 'basicinfo';

    protected $primaryKey = 'id';

    protected $fillable = ['user_id', 'name', 'title', 'description', 'linkedin', 'github', 'mail', 'image_name', 'image_path'];

    // add default values to attributes

    protected $attributes = [
        'name' => '',
        'title' => '',
        'description' => '',
        'linkedin' => '',
        'github' => '',
        'mail' => '',
        'image_name' => '',
        'image_path' => '',
    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
