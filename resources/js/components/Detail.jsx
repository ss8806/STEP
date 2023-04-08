import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import ChallengeButton from "./ChallengeButton";
import CheckButton from "./CheckButton";

const Detail = () => {
    const element = document.getElementById("detail");

    var step;
    var children;
    var is_challenged;
    var is_checked;
    var auth;
    var edit;

    if (element && element.dataset.step) {
        step = JSON.parse(element.dataset.step);
    }

    if (element && element.dataset.children) {
        children = JSON.parse(element.dataset.children);
        console.log(children);
    }

    if (element && element.dataset.is_challenged) {
        is_challenged = JSON.parse(element.dataset.is_challenged);
    }

    if (element && element.dataset.is_checked) {
        is_checked = JSON.parse(element.dataset.is_checked);
        console.log(is_checked);
    }

    if (element && element.dataset.auth) {
        auth = JSON.parse(element.dataset.auth);
    }

    let [show, setShow] = useState(is_challenged);

    if (step.user_id === auth.id) {
        edit = true;
    }

    return (
        <>
            <div className="p-content">
                <div>{step.name}</div>
                <div>{step.content}</div>
                <div> {moment(step.updated_at).format("YYYY年MM月DD日")}</div>
                {(auth && edit) || (
                    <ChallengeButton
                        is_challenged={is_challenged}
                        endpoint={"/step/" + step.id + "/challenge"}
                        show={show}
                        setShow={setShow}
                    ></ChallengeButton>
                )}
                {edit && (
                    <div className="c-link--detail">
                        <a href={"/step/" + step.id + "/edit"}>編集する</a>
                    </div>
                )}
            </div>
            {children.data ? (
                <div className="p-card">
                    <div className="c-flexbox--index">
                        <div className="c-flexbox__flexcontainer c-flexbox__flexcontainer--index">
                            {children.data.map((child, i) => (
                                <ul
                                    key={i}
                                    className="c-flexbox__flexitem c-flexbox__flexitem--index"
                                >
                                    <li className="p-card p-card__header--index u-overflow">
                                        <p> STEP{i + 1}</p>
                                        {child.name}
                                    </li>
                                    <li className="p-card__body">
                                        <p>投稿日</p>
                                        {moment(child.updated_at).format(
                                            "YYYY年MM月DD日"
                                        )}
                                    </li>
                                    <div className="c-link--detail">
                                        <a
                                            href={
                                                "/child/" + child.id + "/show"
                                            }
                                        >
                                            詳細をみる
                                        </a>
                                    </div>
                                    {(auth && edit) || (
                                        <CheckButton
                                            is_checked={is_checked[i]}
                                            endpoint={
                                                "/child/" + child.id + "/check"
                                            }
                                            show={show}
                                        ></CheckButton>
                                    )}
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

export default Detail;

if (document.getElementById("detail")) {
    ReactDOM.render(<Detail />, document.getElementById("detail"));
}
