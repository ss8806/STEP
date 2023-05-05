import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import Challenge from "./Challenge";

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

    return (
        <>
            <p className="c-title c-title__mypage">チャレンジ中のSTEP</p>
            <div className="p-card">
                <div className="p-flexbox">
                    <div className="p-flexbox__flexcontainer p-flexbox__flexcontainer--index">
                        {challenges.map((challenge, i) => (
                            <ul
                                key={i}
                                className="p-flexbox__flexitem"
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
