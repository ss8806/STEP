<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\File\File;

class ProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    // base64用のバリデーション
    public function validationData()
    {
        $all = parent::validationData();

        if ($this->get('icon')) {
            // base64をデコード。プレフィックスに「data:image/jpeg;base64,」のような文字列がついている場合は除去して処理する
            $data = explode(',', $this->get('icon'));
            if (isset($data[1])) {
                $fileData = base64_decode($data[1]);
            } else {
                $fileData = base64_decode($data[0]);
            }

            // tmp領域に画像ファイルとして保存してUploadedFileとして扱う
            $tmpFilePath = sys_get_temp_dir() . '/' . Str::uuid()->toString();
            file_put_contents($tmpFilePath, $fileData);
            $tmpFile = new File($tmpFilePath);
            $filename = $tmpFile->getFilename();
            if ($this->get('icon')) {
                // ファイル名の指定があればセット
                $filename = $this->get('icon');
            }
            $file = new UploadedFile(
                $tmpFile->getPathname(),
                $filename,
                $tmpFile->getMimeType(),
                0,
                true
            );
            $all['icon'] = $file;
        }
        return $all;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'icon'  => 'file|mimes:jpeg,png,jpg,gif|min:1',
            'editProduce'  => 'min:1|max:300',
            'editEmail' => 'min:1|max:30|email',
        ];
    }
    public function attributes()
    {
        return [
            'icon'  => 'アイコン画像',
            'editProduce'  => '自己紹介',
            'editEmail'  => 'メールアドレス',
        ];
    }
}
