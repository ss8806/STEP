import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const ChallengeButton = (props) => {
    let is_challenged = props.is_challenged;
    // console.log(is_challenged);
    let endpoint = props.endpoint;
    // console.log(endpoint);
    let show = props.show;
    // console.log(show);
    let setShow = props.setShow;

    let [challenged, setChallenged] = useState(is_challenged);

    const handleChallenge = async () => {
        // web.phpよりstep/{step}/challeng ルートパラメータに注意
        // awaitでレスポンスを待つ
        if (confirm("チャレンジしますか?")) {
            await axios.put(endpoint);
            setChallenged(!challenged);
            setShow(!show);
        }
    };

    const handleUnchallenge = async () => {
        if (confirm("チャレンジを諦めますか?")) {
            await axios.delete(endpoint);
            setChallenged(!challenged);
            setShow(!show);
        }
    };

    const handleClickChallenge = challenged
        ? handleUnchallenge
        : handleChallenge;

    return (
        <button
            type="button"
            className="c-btn c-btn__like "
            onClick={handleClickChallenge}
        >
            <div>
                {challenged ? (
                    <>
                        <i className="fa fa-fire fa-4x c-btn__fa--red" />
                    </>
                ) : (
                    <>
                        <i className="fa fa-fire fa-4x" />
                    </>
                )}
            </div>
        </button>
    );
};

export default ChallengeButton;
