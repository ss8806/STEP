import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

const Child = () => {
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
        <>
            {sdata ? (
                <div className="p-card">
                    <div className="c-flexbox--index">
                        <div className="c-flexbox__flexcontainer c-flexbox__flexcontainer--index">
                            {sdata.map((step, i) => (
                                <ul
                                    key={i}
                                    className="c-flexbox__flexitem c-flexbox__flexitem--index"
                                >
                                    <li className="p-card p-card__header--index u-overflow">
                                        {step.name}
                                    </li>
                                    <li className="p-card__body">
                                        <p>投稿日</p>
                                        {moment(step.updated_at).format(
                                            "YYYY年MM月DD日"
                                        )}
                                    </li>
                                    <div className="c-link--detail">
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
        </>
    );
};

export default Child;

if (document.getElementById("step")) {
    ReactDOM.render(<Step />, document.getElementById("step"));
}
