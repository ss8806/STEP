import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

const Step = () => {
    const element = document.getElementById("step");
    // ステップ一覧
    let steps = [];
    if (element && element.dataset.steps) {
        steps = JSON.parse(element.dataset.steps);
    }

    return (
        <div className="App">
            {steps ? (
                <div className="p-card">
                    <div className="p-flexbox">
                        <div className="p-flexbox__flexcontainer p-flexbox__flexcontainer--index">
                            {steps.data.map((step, i) => (
                                <ul key={i} className="p-flexbox__flexitem">
                                    <li className="p-card__header p-card__header--step u-overflow">
                                        {step.name}
                                    </li>
                                    <li className="p-card__body">
                                        投稿日:
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
