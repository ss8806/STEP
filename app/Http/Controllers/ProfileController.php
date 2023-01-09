<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\ProfileRequest;


class ProfileController extends Controller
{
    public function index()
    {
        return view('profile')
            ->with('user', Auth::user());
    }

    public function editEmail(ProfileRequest $request)
    {
        $user = Auth::user();
        $user->email = $request->input('editEmail');
        $user->update();
    }
}
