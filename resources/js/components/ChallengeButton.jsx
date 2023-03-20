import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const ChallengeButton = (props) => {
    let is_challenged = props.is_challenged;
    // console.log(is_challenged);
    let endpoint = props.endpoint;
    // console.log(endpoint);

    let [challenged, setChallenged] = useState(is_challenged);

    useEffect(() => {
        setChallenged(is_challenged);
    }, []);

    const handleChallenge = async () => {
        // web.phpよりarticle/{article}/like ルートパラメータに注意
        // awaitでレスポンスを待つ
        await axios.put(endpoint);
        setChallenged(!challenged);
    };

    const handleUnchallenge = async () => {
        await axios.delete(endpoint);
        setChallenged(!challenged);
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
                        <i className="fas fa-heart fa-2x c-btn__fa--red" />
                    </>
                ) : (
                    <>
                        <i className="fas fa-heart fa-2x" />
                    </>
                )}
            </div>
        </button>
    );
};

export default ChallengeButton;
