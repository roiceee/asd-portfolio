<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    use HasFactory;

    protected $table = 'portfolio';

    protected $primaryKey = 'id';

    protected $fillable = ['user_id', 'path', 'name'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
