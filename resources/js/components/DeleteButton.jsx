import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Dialog from "./Dialog";

const DeleteButton = () => {
    const element = document.getElementById("deletebutton");
    let message = "削除してよろしいですか";
    let consent = "削除する";

    if (element && element.dataset.dialog) {
        dialog = JSON.parse(element.dataset.dialog);
    }
    // 子コンポーネントのダイアログを表示する
    const childCompRef = useRef();
    // 消去する
    const onClickSubmit = (e) => {
        e.target.type = "submit";
    };

    return (
        <div className="p-form">
            <button
                type="button"
                className="c-btn--delete u-btn--delete"
                onClick={() => childCompRef.current.childFunc()}
            >
                削除する
            </button>

            <Dialog
                message={message}
                consent={consent}
                ref={childCompRef}
                submit={onClickSubmit}
            ></Dialog>
        </div>
    );
};

export default DeleteButton;

if (document.getElementById("deletebutton")) {
    ReactDOM.render(<DeleteButton />, document.getElementById("deletebutton"));
}
