import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

const Step = () => {
    const element = document.getElementById("step");
    var stepList = [];

    if (element && element.dataset.steps) {
        stepList = JSON.parse(element.dataset.steps);
    }

    const [steps, setSteps] = useState([]);

    useEffect(() => {
        setSteps(stepList);
    }, []);

    if (steps.data !== undefined) {
        var sdata = steps.data;
    }

    return (
        <div className="App">
            {sdata ? (
                <div className="p-card">
                    <div className="p-flexbox">
                        <div className="p-flexbox__flexcontainer p-flexbox__flexcontainer--index">
                            {sdata.map((step, i) => (
                                <ul key={i} className="p-flexbox__flexitem">
                                    <li className="p-card__header p-card__header--step">
                                        {step.name}
                                    </li>
                                    <li className="p-card__body">
                                        <p>投稿日</p>
                                        {moment(step.updated_at).format(
                                            "YYYY年MM月DD日"
                                        )}
                                    </li>
                                    <div className="c-link">
                                        <a href={"/step/" + step.id + "/show"}>
                                            詳細をみる
                                        </a>
                                    </div>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <>データを取得できませんでした。</>
            )}
        </div>
    );
};

export default Step;

if (document.getElementById("step")) {
    ReactDOM.render(<Step />, document.getElementById("step"));
}
