import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import ChallengeButton from "./ChallengeButton";
import LikeButton from "./LikeButton";

const Detail = () => {
    const element = document.getElementById("detail");

    var step;
    var children;
    var is_challenged;

    if (element && element.dataset.step) {
        step = JSON.parse(element.dataset.step);
        // console.log(step);
    }

    if (element && element.dataset.children) {
        children = JSON.parse(element.dataset.children);
        // console.log(children);
    }

    if (element && element.dataset.is_challenged) {
        is_challenged = JSON.parse(element.dataset.is_challenged);
        console.log(is_challenged);
    }

    let [show, setShow] = useState(is_challenged);

    // useEffect(() => {
    //     console.log(show);
    // }, [show]);

    return (
        <>
            <div>
                <div>{step.name}</div>
                <div> {moment(step.updated_at).format("YYYY年MM月DD日")}</div>
                <ChallengeButton
                    is_challenged={is_challenged}
                    endpoint={"/step/" + step.id + "/challenge"}
                    show={show}
                    setShow={setShow}
                ></ChallengeButton>
            </div>
            <>
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
                                                    "/child/" +
                                                    child.id +
                                                    "/show"
                                                }
                                            >
                                                詳細をみる
                                            </a>
                                        </div>
                                        {show && (
                                            <LikeButton
                                                is_liked={child.likes[0]}
                                                endpoint={
                                                    "/child/" +
                                                    child.id +
                                                    "/like"
                                                }
                                            ></LikeButton>
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
        </>
    );
};

export default Detail;

if (document.getElementById("detail")) {
    ReactDOM.render(<Detail />, document.getElementById("detail"));
}
