import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import ChallengeButton from "./ChallengeButton";

const Challenge = (props) => {
    var challenge = props.challenge;

    let [show, setShow] = useState(true);

    console.log(challenge);

    const handleChallenge = () => {
        console.log(challenge);
    };

    return (
        <>
            {show && (
                <>
                    <li className="p-card__body">
                        <p>投稿日</p>
                        {moment(challenge.updated_at).format("YYYY年MM月DD日")}
                    </li>
                    <li className="p-card_count">
                        進捗
                        {challenge.count &&
                            (challenge.count / challenge.count_child) * 100}
                        %
                    </li>
                    <ChallengeButton
                        is_challenged={true}
                        endpoint={
                            "/step/" + challenge.challenge_id + "/challenge"
                        }
                        // show={show}
                        // setShow={setShow}
                    ></ChallengeButton>
                    <div className="c-link--detail">
                        <a href={"/step/" + challenge.challenge_id + "/show"}>
                            詳細をみる
                        </a>
                    </div>
                </>
            )}
        </>
    );
};

export default Challenge;
