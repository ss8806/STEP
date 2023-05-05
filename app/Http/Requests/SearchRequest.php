<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class SearchRequest extends FormRequest
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
            'aboveday'   => ['nullable','date'],
            'belowday'   => ['nullable','date']
        ];
    }

    public function withValidator($validator)
    {
        // 入力された本の最低価格
        $aboveday = $this->input('aboveday');
        // 入力された本の最高価格
        $belowday = $this->input('belowday');

        $validator->after(function ($validator) use ($aboveday, $belowday) {
            // 日付の最低と本の最高がどちらも入力されていれば、以下の処理を実行
            if (isset($aboveday,) && isset($belowday)) {
                //下限が上限よりも高い場合
                if ($aboveday > $belowday) {
                    $validator->errors()->add('aboveday', '下限日は上限日以下を入力してください');
                }
            }
        });
    }

    public function messages()
    {
        return [
            'belowday.gte' => '下限価格は上限価格以下を入力してください',
        ];
    }

    public function attributes()
    {
        return [
            'aboveday'        => '上限日',
            'belowday'        => '下限日',
        ];
    }
}
