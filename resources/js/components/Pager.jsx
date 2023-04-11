import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const ChallengeButton = (props) => {
    let is_challenged = props.is_challenged;

    let [challenged, setChallenged] = useState(is_challenged);

    const handleChallenge = async () => {};

    return <></>;
};

export default ChallengeButton;
