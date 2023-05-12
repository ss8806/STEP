import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Dialog from "./Dialog";

const CheckButton = (props) => {
    let is_checked = props.is_checked;
    let endpoint = props.endpoint;
    let show = props.show;

    let [message, setMessage] = useState("");
    let [consent, setConsent] = useState("");
    let [checked, setchecked] = useState(is_checked);

    useEffect(() => {
        setchecked(is_checked);
    }, []);

    const childCompRef = useRef();

    const handleChallengeMessage = () => {
        setConsent("クリア");
    };

    const handleAbandonMessage = () => {
        setConsent("クリアを取り消す");
    };

    const handleCheck = async () => {
        // web.phpよりchild/{child}/check ルートパラメータに注意
        // awaitでレスポンスを待つ
        await axios.put(endpoint);
        setchecked(!checked);
    };

    const handleUnCheck = async () => {
        await axios.delete(endpoint);
        setchecked(!checked);
    };

    const handleClickCheck = checked ? handleUnCheck : handleCheck;

    const onClickSubmit = () => {
        handleClickCheck();
    };

    return (
        <>
            <button
                type="button"
                className="c-btn c-btn--check "
                // チャレンジボタンが活性ならクリアボタンを表示、非活性ならクリアボタンを非表示
                style={{ visibility: show ? "visible" : "hidden" }}
            >
                {checked ? (
                    <i
                        className="fa fa-check fa-2x c-btn--green"
                        onClick={() => {
                            handleAbandonMessage();
                            childCompRef.current.childFunc();
                        }}
                    />
                ) : (
                    <i
                        className="fa fa-check fa-2x"
                        onClick={() => {
                            handleChallengeMessage();
                            childCompRef.current.childFunc();
                        }}
                    />
                )}
            </button>
            {/* 確認のダイアログ */}
            <Dialog
                message={message}
                consent={consent}
                ref={childCompRef}
                submit={onClickSubmit}
            ></Dialog>
        </>
    );
};

export default CheckButton;
