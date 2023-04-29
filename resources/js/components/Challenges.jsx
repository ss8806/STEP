import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import ChallengeButton from "./ChallengeButton";

const Challenges = () => {
    const element = document.getElementById("challenges");

    let chs;
    let is_challenged;

    if (element && element.dataset.challenges) {
        chs = JSON.parse(element.dataset.challenges);
        console.log(chs);
    }

    let [challenges, setChallenges] = useState(chs);

    if (element && element.dataset.is_challenged) {
        is_challenged = JSON.parse(element.dataset.is_challenged);
    }
    // 配列の中身全てtrueになる
    let [show, setShow] = useState(is_challenged);

    const handleDeleteChallenge = (i) => {
        const newTodos = [...challenges];
        newTodos.splice(i, 1);
        setChallenges(newTodos);
    };

    return (
        <>
            <p className="c-title c-title__mypage">チャレンジ中のSTEP</p>

            <div className="p-card">
                <div className="c-flexbox--index">
                    <div className="c-flexbox__flexcontainer c-flexbox__flexcontainer--index">
                        {challenges.map((challenge, i) => {
                            return (
                                <ul
                                    key={i}
                                    className="c-flexbox__flexitem c-flexbox__flexitem--index"
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
                                    <ChallengeButton
                                        is_challenged={is_challenged[i]}
                                        endpoint={
                                            "/step/" +
                                            challenge.challenge_id +
                                            "/challenge"
                                        }
                                        show={show[i]}
                                        setShow={setShow}
                                        handleDeleteChallenge={
                                            handleDeleteChallenge
                                        }
                                        challenges={challenges}
                                        index={i}
                                    ></ChallengeButton>
                                    <div className="c-link--detail">
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
                                    {/* <button
                                        type="button"
                                        onClick={() => handleDeleteChallenge(i)}
                                    >
                                        消去ボタン
                                    </button> */}
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
