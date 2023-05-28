import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Dialog from "./Dialog";

const ChallengeButton = (props) => {
    // ページを開いた最初のチャレンジ状態
    let is_challenged = props.is_challenged;
    // 非同期通信のuri
    let endpoint = props.endpoint;
    // 親コンポーネントの子ステップのチェックボタンの表示状態
    let show = props.show;
    // 親コンポーネント(Detail.jsx)の子ステップのチェックボタンの表示を操作する
    let setShow = props.setShow;
    // チャレンジ状態
    let [challenged, setChallenged] = useState(is_challenged);
    // ダイアログの内容の表示について
    let [message, setMessage] = useState("");
    let [consent, setConsent] = useState("");
    // 子コンポーネントのダイアログを表示する
    const childCompRef = useRef();
    // ダイアログの内容を設定する
    const handleChallengeMessage = () => {
        setMessage("チャレンジしますか？");
        setConsent("チャレンジする");
    };
    const handleAbandonMessage = () => {
        setMessage("諦めますか？");
        setConsent("諦める");
    };
    // チャレンジ状態にする
    const handleChallenge = async () => {
        // awaitでレスポンスを待つ
        await axios.put(endpoint);
        setChallenged(!challenged);
        setShow(!show);
    };
    // チャレンジ状態を解除する
    const handleAbandon = async () => {
        await axios.delete(endpoint);
        setChallenged(!challenged);
        setShow(!show);
    };
    // チャレンジ状態の切り替え
    const handleClickChallenge = challenged ? handleAbandon : handleChallenge;
    // チャレンジボタンを押下したさいに上記のメソッドを実行する
    const onClickSubmit = () => {
        handleClickChallenge();
    };

    return (
        <>
            <button type="button" className="c-btn--challenge ">
                <div>
                    {challenged ? (
                        // チャレンジ中
                        <i
                            type="button"
                            className="fa fa-fire fa-4x c-btn--red"
                            onClick={() => {
                                handleAbandonMessage();
                                childCompRef.current.childFunc();
                            }}
                        />
                    ) : (
                        // 未チャレンジ
                        <i
                            type="button"
                            className="fa fa-fire fa-4x"
                            onClick={() => {
                                handleChallengeMessage();
                                childCompRef.current.childFunc();
                            }}
                        />
                    )}
                </div>
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

export default ChallengeButton;
