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

    const childCompRef = useRef();

    // const onClickSubmit = () => {
    //     document.getElementsByClassName("p-dialog__consent")[0].type = "submit";
    // };

    const onClickSubmit = (e) => {
        e.target.type = "submit";
    };

    return (
        <div className="p-form p-form__group">
            <button
                type="button"
                className="c-btn__delete"
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
