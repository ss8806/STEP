import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Dialog from "./Dialog";

const ChallengeButton = (props) => {
    let is_challenged = props.is_challenged;
    let endpoint = props.endpoint;
    let show = props.show;
    let setShow = props.setShow;

    let [message, setMessage] = useState("");
    let [consent, setConsent] = useState("");
    let [challenged, setChallenged] = useState(is_challenged);

    const childCompRef = useRef();

    const handleChallengeMessage = () => {
        setMessage("チャレンジしますか？");
        setConsent("チャレンジする");
    };

    const handleAbandonMessage = () => {
        setMessage("諦めますか？");
        setConsent("諦める");
    };

    const handleChallenge = async () => {
        // web.phpよりstep/{step}/challeng ルートパラメータに注意
        // awaitでレスポンスを待つ
        await axios.put(endpoint);
        setChallenged(!challenged);
        setShow(!show);
    };

    const handleAbandon = async () => {
        await axios.delete(endpoint);
        setChallenged(!challenged);
        setShow(!show);
    };

    const handleClickChallenge = challenged ? handleAbandon : handleChallenge;

    const onClickSubmit = () => {
        handleClickChallenge();
    };

    return (
        <>
            <button
                type="button"
                className="c-btn c-btn__like "
                // onClick={handleClickChallenge}
            >
                <div>
                    {challenged ? (
                        <>
                            <i
                                type="button"
                                className="fa fa-fire fa-4x c-btn__fa--red"
                                onClick={() => {
                                    handleAbandonMessage();
                                    childCompRef.current.childFunc();
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <i
                                type="button"
                                className="fa fa-fire fa-4x"
                                onClick={() => {
                                    handleChallengeMessage();
                                    childCompRef.current.childFunc();
                                }}
                            />
                        </>
                    )}
                </div>
            </button>
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
