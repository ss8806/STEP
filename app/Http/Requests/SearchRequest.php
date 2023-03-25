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
            // 'aboveprice'   => ['min:1']
            // lt: 対象の数値より小さいかどうか(<)
            // 'aboveprice'   => 'nullable|lte:belowprice|max:1000',
            // 'aboveprice'   => 'max:2',
            // 'belowprice'   => 'max:3',
            // 'belowprice'   => 'nullable|gte:aboveprice|max:3',          
        ];
    }

    public function withValidator($validator)
    {
        // 入力された本の最低価格
        $aboveprice = $this->input('aboveprice');
        // 入力された本の最高価格
        $belowprice = $this->input('belowprice');

        $validator->after(function ($validator) use($aboveprice, $belowprice ) {
            // 本の最低価格と本の最高価格がどちらも入力されていれば、以下の処理を実行
            if(isset($aboveprice,) && isset($belowprice)) {
                //下限価格が上限価格よりも値段が高い場合
                if($aboveprice > $belowprice) {
                    $validator->errors()->add('aboveprice', '下限価格は上限価格以下を入力してください');
                }
                // 上限価格が本の最低価格を下回る
                // if($belowprice < $aboveprice) {
                //     $validator->errors()->add('belowprice', '本の最高価格は本の最低価格よりも価格は高くしてください。');
                // }
            }
        });
    }

    public function messages()
    {
        return [
            'aboveprice.max' => '99円以下で入力してください',
            'belowprice.max' => '999円以下で入力してください',
            'belowprice.gte' => '下限価格は上限価格以下を入力してください',
        ];
    }

    public function attributes()
    {
        return [
            'aboveprice'        => '上限価格',
            'belowprice'        => '下限価格',
        ];
    }

    
}
