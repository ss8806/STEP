import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

const Dialog = forwardRef((props, ref) => {
    // ダイアログの説明の文言
    let message = props.message;
    // 同意の文言
    let consent = props.consent;
    // 親コンポーネントからダイアログを表示するメソッドを受け取る
    let submit = props.submit;
    // ダイアログの表示状態
    const [showDialog, setShowDialog] = useState(false);
    // ダイアログを閉じる
    const onCloseDialog = () => {
        setShowDialog(false);
    };
    // ダイアログを表示する
    useImperativeHandle(ref, () => ({
        childFunc() {
            setShowDialog(true);
        },
    }));
    // 親コンポーネントから受け取ったメソッドを実行
    const onClickSubmit = (e) => {
        submit(e);
        setTimeout(() => {
            onCloseDialog();
        }, 100);
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
