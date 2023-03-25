import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const CheckButton = (props) => {
    let is_checked = props.is_checked;
    // console.log(is_checked);
    let endpoint = props.endpoint;
    // console.log(endpoint);
    let show = props.show;

    let [checked, setchecked] = useState(is_checked);

    useEffect(() => {
        setchecked(is_checked);
    }, []);

    const handleCheck = async () => {
        // web.phpよりchild/{child}/check ルートパラメータに注意
        // awaitでレスポンスを待つ
        await axios.put(endpoint);
        alert("クリアしました。");
        setchecked(!checked);
    };

    const handleUnCheck = async () => {
        await axios.delete(endpoint);
        alert("クリアを取り消しました。");
        setchecked(!checked);
    };

    const handleClickCheck = checked ? handleUnCheck : handleCheck;

    return (
        <button
            type="button"
            className="c-btn c-btn__like "
            onClick={handleClickCheck}
            style={{ visibility: show ? "visible" : "hidden" }}
        >
            {checked ? (
                <i className="fa fa-check fa-2x c-btn__fa--green" />
            ) : (
                <i className="fa fa-check fa-2x" />
            )}
        </button>
    );
};

export default CheckButton;
