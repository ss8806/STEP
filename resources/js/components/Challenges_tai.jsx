import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import Challenge from "./Challenge";
import ChallengeButton from "./ChallengeButton";

const Challenges = () => {
    const element = document.getElementById("challenges");

    var challenges;
    var is_challenged;

    if (element && element.dataset.challenges) {
        challenges = JSON.parse(element.dataset.challenges);
        console.log(challenges);
    }

    if (element && element.dataset.is_challenged) {
        is_challenged = JSON.parse(element.dataset.is_challenged);
    }

    let [challenged, setChallenged] = useState(is_challenged);

    console.log(challenges);

    // useEffect(() => {
    //     console.log(show);
    // }, [show]);

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
                                <Challenge challenge={challenge}></Challenge>
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
