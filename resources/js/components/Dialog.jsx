import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

const Dialog = forwardRef((props, ref) => {
    let message = props.message;
    let consent = props.consent;
    // 親コンポーネントからメソッドを受け取る
    let submit = props.submit;

    const [showDialog, setShowDialog] = useState(false);

    const onCloseDialog = () => {
        setShowDialog(!showDialog);
    };

    useImperativeHandle(ref, () => ({
        childFunc() {
            setShowDialog(!showDialog);
        },
    }));

    const onClickSubmit = (e) => {
        // 親コンポーネントから受け取ったメソッドを実行
        submit(e);
    };

    return (
        <>
            {showDialog && (
                <>
                    <div className="p-dialog__background"></div>
                    <div className="p-dialog__container">
                        <div className="p-dialog__message">{message}</div>
                        <div className="p-dialog__button">
                            <button
                                type="button"
                                className="p-dialog__consent"
                                onClick={onClickSubmit}
                            >
                                {consent}
                            </button>
                            <button
                                type="button"
                                className="p-dialog__cancel"
                                onClick={onCloseDialog}
                            >
                                キャンセル
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
});

export default Dialog;
