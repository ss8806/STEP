import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Dialog from "./Dialog";

const CheckButton = (props) => {
    // ページを開いた最初のチェック状態
    let is_checked = props.is_checked;
    // 非同期通信のuri
    let endpoint = props.endpoint;
    // 子ステップのチェックボタンの表示状態
    let show = props.show;
    // チェック状態
    let [checked, setchecked] = useState(is_checked);
    // ダイアログの内容の表示について
    let [message, setMessage] = useState("");
    let [consent, setConsent] = useState("");
    // 子コンポーネントのダイアログを表示する
    const childCompRef = useRef();
    // ダイアログの内容を設定する
    const handleChallengeMessage = () => {
        setConsent("クリア");
    };
    const handleAbandonMessage = () => {
        setConsent("クリアを取り消す");
    };
    // チェック状態にする
    const handleCheck = async () => {
        // web.phpよりchild/{child}/check ルートパラメータに注意
        // awaitでレスポンスを待つ
        await axios.put(endpoint);
        setchecked(!checked);
    };
    // チェック状態を解除する
    const handleUnCheck = async () => {
        await axios.delete(endpoint);
        setchecked(!checked);
    };
    // チェック状態の切り替え
    const handleClickCheck = checked ? handleUnCheck : handleCheck;
    // チェックボタンを押下したさいに上記のメソッドを実行する
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
