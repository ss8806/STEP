import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Validation = (props) => {
    let name = props.name;
    let input = props.input;
    let max = props.max;
    let min = props.min;
    let error = props.error;
    let sucess = props.sucess;
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
