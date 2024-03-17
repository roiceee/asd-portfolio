<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommunityExperience extends Model
{
    use HasFactory;

    protected $table = 'community_experience';

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'image_path'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
