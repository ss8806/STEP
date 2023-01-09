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
            'editEmail'   => 'max:10',
        ];
    }

    public function messages()
    {
        return [
            'editEmail.max'   => '10文字以下で入力してください',
        ];
    }

    public function attributes()
    {
        return [
            'editEmail'   => 'メール',
        ];
    }
}
