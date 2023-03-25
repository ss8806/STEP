<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StepRequest extends FormRequest
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
            'name' => 'max:1',
            'content' => 'max:1',
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'ステップ名',
            'content' => '内容',
        ];
    }

}
