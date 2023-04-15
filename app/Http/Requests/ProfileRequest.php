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
            'editProduce'   => ['required', 'string','min:1', 'max:10'],
            'editEmail'   => 'max:10|email',
        ];
    }

    public function attributes()
    {
        return [
            'editProduce'   => '自己紹介',
            'editEmail'   => 'メール',
        ];
    }
}
