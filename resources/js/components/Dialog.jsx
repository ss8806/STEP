import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Dialog = (props) => {
    const element = document.getElementById("dialog");
    var message;
    var consent;
    if (element && element.dataset.message) {
        message = JSON.parse(element.dataset.message);
    }
    if (element && element.dataset.consent) {
        consent = JSON.parse(element.dataset.consent);
    }

    const [showDelButton, setShowDelButton] = useState(false);

    if (element && element.dataset.dialog) {
        dialog = JSON.parse(element.dataset.dialog);
    }

    const onClickDeleteContent = () => {
        setShowDelButton(!showDelButton);
    };

    return (
        <>
            <div className="p-form p-form__group">
                <button
                    type="button"
                    className="c-btn__delete"
                    onClick={onClickDeleteContent}
                >
                    削除する
                </button>
            </div>
            {showDelButton && (
                <>
                    <div className="p-dialog__background"></div>
                    <div className="p-dialog__container">
                        <div className="p-dialog__message">{message}</div>
                        <div className="p-dialog__button">
                            <button type="submit" className="p-dialog__consent">
                                {consent}
                            </button>
                            <button
                                type="button"
                                className="p-dialog__cancel"
                                onClick={onClickDeleteContent}
                            >
                                キャンセル
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Dialog;

if (document.getElementById("dialog")) {
    ReactDOM.render(<Dialog />, document.getElementById("dialog"));
}
