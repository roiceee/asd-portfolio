<?php

namespace App\Http\Controllers\Auth;



use App\Http\Controllers\Controller;
use App\Models\BasicInfo;
use App\Models\User;
use App\Services\UserChecker;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{

    protected $userChecker;

    public function __construct(UserChecker $userChecker)
    {
        $this->userChecker = $userChecker;
    }

    /**
     * Display the registration view.
     */
    public function create(): Response | RedirectResponse
    {
        $hasUser = $this->userChecker->checkDatabaseIfItHasUser();

        if ($hasUser) {
            return redirect()->route('login');
        }

        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {

        $hasUser = $this->userChecker->checkDatabaseIfItHasUser();

        if ($hasUser) {
            return redirect()->route('login');
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        $basic_info = BasicInfo::create([
            'user_id' => $user->id,
        ]);

        event(new Registered($basic_info));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
