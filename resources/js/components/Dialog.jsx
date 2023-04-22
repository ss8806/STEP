import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

const Dialog = forwardRef((props, ref) => {
    let message = props.message;
    let consent = props.consent;

    const [showDialog, setShowDialog] = useState(false);

    useImperativeHandle(ref, () => ({
        childFunc() {
            setShowDialog(!showDialog);
        },
    }));

    return (
        <>
            {showDialog && (
                <>
                    <div className="p-dialog__background"></div>
                    <div className="p-dialog__container">
                        <div className="p-dialog__message">{message}</div>
                        <div className="p-dialog__button">
                            <button type="button" className="p-dialog__consent">
                                {consent}
                            </button>
                            <button
                                type="button"
                                className="p-dialog__cancel"
                                // onClick={onCloseDialog}
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
