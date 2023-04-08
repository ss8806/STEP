import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import ChallengeButton from "./ChallengeButton";

const Challenges = () => {
    const element = document.getElementById("challenges");

    var challenges;

    if (element && element.dataset.challenges) {
        challenges = JSON.parse(element.dataset.challenges);
    }

    let [show, setShow] = useState(true);

    return (
        <>
            <p className="c-title c-title__mypage">チャレンジ中のSTEP</p>

            <div className="p-card">
                <div className="c-flexbox--index">
                    <div className="c-flexbox__flexcontainer c-flexbox__flexcontainer--index">
                        {challenges.map((challenge, i) => (
                            <ul
                                key={i}
                                className="c-flexbox__flexitem c-flexbox__flexitem--index"
                            >
                                <li className="p-card p-card__header--index u-overflow">
                                    {challenge.step_name}
                                </li>
                                <li className="p-card__body">
                                    <p>投稿日</p>
                                    {moment(challenge.updated_at).format(
                                        "YYYY年MM月DD日"
                                    )}
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
                                    is_challenged={true}
                                    endpoint={
                                        "/step/" +
                                        challenge.challenge_id +
                                        "/challenge"
                                    }
                                    show={show}
                                    setShow={setShow}
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
                        ))}
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
