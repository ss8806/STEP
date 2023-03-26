import { divide, minBy } from "lodash";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const LengthValidation = (props) => {
    let name = props.name;
    let input = props.input;
    let max = props.max;
    let min = props.min;
    let errors = props.errors;
    let show = props.show;
    console.log(show);

    return (
        <>
            {show && show && input.length <= 3 && (
                <span className="c-error">
                    {name}は、{min}文字以上にしてください。
                </span>
            )}
            {show && input.length >= 10 && (
                <span className="c-error">
                    {name}は、{max}文字以下にしてください。
                </span>
            )}
            {show || <span className="c-error">{errors}</span>}
        </>
    );
};

export default LengthValidation;
