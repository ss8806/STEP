<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\ProfileRequest;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    // プロフィールを表示
    public function index()
    {
        return view('profile')
            ->with('user', Auth::user());
    }

    // 自己紹介編集
    public function editProduce(ProfileRequest $request)
    {
        $user = Auth::user();
        $user->produce = $request->input('editProduce');
        $user->update();
    }

    // メール編集
    public function editEmail(ProfileRequest $request)
    {
        $user = Auth::user();
        $user->email = $request->input('editEmail');
        $user->update();
    }

    // アイコン画像編集
    public function editIcon(ProfileRequest $request)
    {
        try{
            $user = Auth::user();
            $disk = Storage::disk('s3');
            $base64File = $request->input('icon');
            // Log::info($$base64File);
            // "data:{拡張子}"と"base64,"で区切る
            list($fileInfo, $fileData) = explode(';', $base64File);
            // 拡張子を取得
            $extension = explode('/', $fileInfo)[1];
            // $fileDataにある"base64,"を削除する
            list(, $fileData) = explode(',', $fileData);
            // base64をデコード
            $fileData = base64_decode($fileData);
            // ランダムなファイル名生成
            $fileName = md5(uniqid(rand(), true)). ".$extension";           
            // AWS S3 に保存する
            $disk->put($fileName, $fileData);
             // AWS S3 から前のアイコンを削除する
             $disk->delete($user->icon);
            // DBに保存
            $user->icon = $fileName;                
            $user->save();
            // return response()->json(compact('article'),200);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(
                "error"
            );
        }
        
    }
}
