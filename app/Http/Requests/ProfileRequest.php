<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'editUserName'   => 'max:10',
            'editEmail'   => 'max:10|email',
        ];
    }

    public function messages()
    {
        return [
            'editUserName.max'   => '10文字以下で入力してください',
            'editEmail.max'   => '10文字以下で入力してください',
        ];
    }

    public function attributes()
    {
        return [
            'editUserName'   => '名前',
            'editEmail'   => 'メール',
        ];
    }
}
