<?php

namespace App\Services;

use App\Models\User;


class UserChecker
{

    //check if there is even one user in the database
    public function checkDatabaseIfItHasUser()
    {
        return User::count() > 0;
    }
}
