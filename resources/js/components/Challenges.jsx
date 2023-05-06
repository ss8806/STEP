import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import Dialog from "./Dialog";

const Challenges = () => {
    const element = document.getElementById("challenges");

    let challenges_ini;
    let [message, setMessage] = useState("");
    let [consent, setConsent] = useState("");

    const childCompRef = useRef();

    if (element && element.dataset.challenges) {
        challenges_ini = JSON.parse(element.dataset.challenges);
    }

    let [challenges, setChallenges] = useState(challenges_ini);
    let [endpoint, setEndpoint] = useState("");
    let [index, setIndex] = useState("");

    const handleAbandonMessage = () => {
        setMessage("諦めますか？");
        setConsent("諦める");
    };

    const handleAbandon = async () => {
        await axios.delete("/step/" + endpoint + "/challenge");
        handleDeleteChallenge(index);
    };

    const onClickSubmit = () => {
        handleAbandon();
    };

    const handleDeleteChallenge = (i) => {
        const newTodos = [...challenges];
        newTodos.splice(i, 1);
        setChallenges(newTodos);
    };

    return (
        <>
            <p className="c-title p-mypage__title">チャレンジ中のSTEP</p>
            <div className="p-card">
                <div className="p-flexbox">
                    <div className="p-flexbox__flexcontainer p-flexbox__flexcontainer--index">
                        {challenges.data.map((challenge, i) => {
                            return (
                                <ul
                                    key={i}
                                    className="p-flexbox__flexitem"
                                >
                                    <li className="p-card__body">
                                        <p>投稿日</p>
                                        {moment(challenge.updated_at).format(
                                            "YYYY年MM月DD日"
                                        )}
                                    </li>
                                    <li className="p-card__body">
                                        <p>{challenge.step_name}</p>
                                    </li>
                                    <li className="p-card_count">
                                        進捗
                                        {challenge.count &&
                                            (challenge.count /
                                                challenge.count_child) *
                                            100}
                                        %
                                    </li>

                                    <button
                                        type="button"
                                        className="c-btn c-btn--like "
                                    >
                                        <>
                                            <i
                                                type="button"
                                                className="fa fa-fire fa-4x c-btn--red"
                                                onClick={() => {
                                                    setEndpoint(challenge.challenge_id);
                                                    setIndex(i);
                                                    // ダイアログのメッセージ
                                                    handleAbandonMessage();
                                                    // ダイアログ表示
                                                    childCompRef.current.childFunc();
                                                }}
                                            />
                                        </>
                                    </button>
                                    <Dialog
                                        message={message}
                                        consent={consent}
                                        ref={childCompRef}
                                        submit={onClickSubmit}
                                    ></Dialog>

                                    <div className="c-link">
                                        <a
                                            href={
                                                "/step/" +
                                                challenge.challenge_id +
                                                "/show"
                                            }
                                        >
                                            詳細をみる
                                        </a>
                                    </div>
                                </ul>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Challenges;

if (document.getElementById("challenges")) {
    ReactDOM.render(<Challenges />, document.getElementById("challenges"));
}