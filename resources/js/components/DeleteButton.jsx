import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Dialog from "./Dialog";

const DeleteButton = () => {
    const element = document.getElementById("deletebutton");
    let message = "削除してよろしいですか";
    let consent = "削除する";

    const [showDialog, setShowDialog] = useState(false);

    if (element && element.dataset.dialog) {
        dialog = JSON.parse(element.dataset.dialog);
    }

    const onClickDeleteButton = () => {
        setShowDialog(!showDialog);
    };

    const childCompRef = useRef();

    return (
        <div className="p-form p-form__group">
            {/* <button
                type="button"
                className="c-btn__delete"
                onClick={onClickDeleteButton}
            >
                削除する
            </button> */}
            <button
                type="button"
                onClick={() => childCompRef.current.childFunc()}
            >
                button
            </button>

            <Dialog
                message={message}
                consent={consent}
                ref={childCompRef}
            ></Dialog>
        </div>
    );
};

export default DeleteButton;

if (document.getElementById("deletebutton")) {
    ReactDOM.render(<DeleteButton />, document.getElementById("deletebutton"));
}
