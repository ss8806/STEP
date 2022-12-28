import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Message = () => {
    const element = document.getElementById("message");
    var message = [];
    message = JSON.parse(element.dataset.message);
    const [close, setClose] = useState(false);
    const handleToggle = () => {
        setClose((prevClose) => !prevClose), 5000;
    };

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            // 5秒経過したら閉じる
            handleToggle();
        }, 3000);
        // こういう処理を書く
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            {close ? (
                <></>
            ) : (
                <div className="p-message__container p-message__container--success">
                    <i className="fas fa-check-circle p-message__icon"></i>
                    <div className="p-message__text">
                        <p>{message}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Message;

if (document.getElementById("message")) {
    ReactDOM.render(<Message />, document.getElementById("message"));
}
