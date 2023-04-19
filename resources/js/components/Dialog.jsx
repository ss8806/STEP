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
        console.log(props);
    };

    return (
        <>
            <button
                type="button"
                className="c-btn__delete"
                onClick={onClickDeleteContent}
            >
                削除する
            </button>
            {showDelButton && (
                <>
                    {message}
                    <button type="submit" className="c-btn__delete">
                        {consent}
                    </button>
                </>
            )}
        </>
    );
};

export default Dialog;

if (document.getElementById("dialog")) {
    ReactDOM.render(<Dialog />, document.getElementById("dialog"));
}
