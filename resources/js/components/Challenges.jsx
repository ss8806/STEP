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

    let [challenges, setChallenges] = useState(challenges_ini.data);
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
                        {challenges.map((challenge, i) => {
                            return (
                                <ul
                                    key={i}
                                    className="p-flexbox__flexitem p-flexbox__flexitem--challenges"
                                >
                                    <li className="p-card__header u-overflow">
                                        <p>{challenge.step_name}</p>
                                    </li>
                                    <li className="p-card__body">
                                        投稿日:
                                        {moment(challenge.updated_at).format(
                                            "YYYY年MM月DD日"
                                        )}
                                    </li>
                                    <li className="p-card__count">
                                        進捗
                                        {challenge.count &&
                                            // 四捨五入して進捗率を率を表示
                                            Math.round(
                                                (challenge.count /
                                                    challenge.count_child) *
                                                    100
                                            )}
                                        %
                                    </li>

                                    <button
                                        type="button"
                                        className="c-btn c-btn--challenge p-card__challengebtn"
                                    >
                                        <i
                                            type="button"
                                            className="fa fa-fire fa-4x c-btn--red"
                                            onClick={() => {
                                                setEndpoint(
                                                    challenge.challenge_id
                                                );
                                                // 消去の際に添字を指定
                                                setIndex(i);
                                                // ダイアログのメッセージ
                                                handleAbandonMessage();
                                                // ダイアログ表示
                                                childCompRef.current.childFunc();
                                            }}
                                        />
                                    </button>
                                    <li className="c-link p-card__link">
                                        <a
                                            href={
                                                "/step/" +
                                                challenge.challenge_id +
                                                "/show"
                                            }
                                        >
                                            詳細をみる
                                        </a>
                                    </li>
                                    <Dialog
                                        message={message}
                                        consent={consent}
                                        ref={childCompRef}
                                        submit={onClickSubmit}
                                    ></Dialog>
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
