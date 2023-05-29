import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// ステップ、子ステップを作成、編集してから遷移する際のメッセージ
const Message = () => {
    const element = document.getElementById("message");
    let message = [];
    message = JSON.parse(element.dataset.message);
    // メッセージの表示の状態
    const [close, setClose] = useState(false);
    // メッセージを閉じる
    const handleToggle = () => {
        setClose((prevClose) => !prevClose);
    };

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            // ３秒経過したら閉じる
            handleToggle();
        }, 3000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            {close ? (
                <></>
            ) : (
                <>
                    {" "}
                    <div className="p-dialog__background"></div>
                    <div className="p-message__container p-message__container--success">
                        <i className="fas fa-check-circle p-message__circle"></i>
                        <div className="p-message__text">
                            <p>{message}</p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Message;

if (document.getElementById("message")) {
    ReactDOM.render(<Message />, document.getElementById("message"));
}
