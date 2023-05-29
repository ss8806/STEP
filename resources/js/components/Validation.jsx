import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Validation = (props) => {
    let name = props.name;
    // 入力内容
    let input = props.input;
    // 最大値
    let max = props.max;
    // 最小値
    let min = props.min;
    // エラー内容
    let error = props.error;
    // 成功時の内容
    let sucess = props.sucess;
    // 表示の状態
    let show = props.show;

    return (
        <>
            {show && input.length < min && (
                <span className="c-error">
                    {name}は、{min}文字以上にしてください。
                </span>
            )}
            {show && input.length > max && (
                <span className="c-error">
                    {name}は、{max}文字以下にしてください。
                </span>
            )}
            <span className="c-sucess">{sucess}</span>
            {/* サーバーサイドからのエラーを表示 */}
            {show || <span className="c-error">{error}</span>}
        </>
    );
};

export default Validation;
