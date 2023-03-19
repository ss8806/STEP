<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\PasswordRequest;
use App\Http\Requests\ProfileRequest;
use Illuminate\Support\Facades\Log;


class ProfileController extends Controller
{
    public function index()
    {
        return view('profile')
            ->with('user', Auth::user());
    }

    public function editUserName(ProfileRequest $request)
    {
        $user = Auth::user();
        $user->name = $request->input('editUserName');
        $user->update();
    }

    public function editEmail(ProfileRequest $request)
    {
        $user = Auth::user();
        $user->email = $request->input('editEmail');
        $user->update();
    }

    public function editPassword(PasswordRequest $request)
    {
        try{
        $user = Auth::user();
        // $request->only('password', 'password_confirmation');
        $user->password = Hash::make($request->editPassword);
        $user->save();
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(
                "error"
            );
        }
    }
}
