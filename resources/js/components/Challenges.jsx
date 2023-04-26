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
        // console.log(challenges);
    }

    let [challenges, setChallenges] = useState(chs);

    if (element && element.dataset.is_challenged) {
        is_challenged = JSON.parse(element.dataset.is_challenged);
        // console.log(is_challenged);
    }

    let [show, setShow] = useState(is_challenged);

    const handleChallenge = () => {
        const newTodos = [...challenges];
        const deleteTodo = newTodos.splice(1, 1);
        setChallenges(deleteTodo);

        console.log(deleteTodo);
        // copyList.splice(1, 1);
        // setChallenges(...copyList);
        // console.log(copyList);
    };

    // useEffect(() => {
    //     console.log(challenges);
    // }, [challenges]);

    // delete challenges[0];

    return (
        <>
            <p className="c-title c-title__mypage">チャレンジ中のSTEP</p>

            <button onClick={() => handleChallenge()}>ボタン</button>

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
                                        challenge={challenges[i]}
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
