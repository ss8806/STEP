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
    var currentpage;

    if (element && element.dataset.step) {
        step = JSON.parse(element.dataset.step);
    }

    if (element && element.dataset.children) {
        children = JSON.parse(element.dataset.children);
    }

    if (element && element.dataset.is_challenged) {
        is_challenged = JSON.parse(element.dataset.is_challenged);
    }

    if (element && element.dataset.is_checked) {
        is_checked = JSON.parse(element.dataset.is_checked);
    }

    if (element && element.dataset.auth) {
        auth = JSON.parse(element.dataset.auth);
        if (auth) {
            if (step.user_id === auth.id) {
                edit = true;
            }
        }
    }

    if (element && element.dataset.currentpage) {
        currentpage = JSON.parse(element.dataset.currentpage);
    }

    let [show, setShow] = useState(is_challenged);

    return (
        <>
            <div className="p-content">
                <div>{step.name}</div>
                <div>{step.content}</div>
                <div> {moment(step.updated_at).format("YYYY年MM月DD日")}</div>
                {edit ||
                    (auth && (
                        <ChallengeButton
                            is_challenged={is_challenged}
                            endpoint={"/step/" + step.id + "/challenge"}
                            show={show}
                            // メソッドを子コンポーネントに渡す
                            setShow={setShow}
                        ></ChallengeButton>
                    ))}
                {edit && (
                    <div className="c-link--detail">
                        <a href={"/step/" + step.id + "/edit"}>編集する</a>
                    </div>
                )}
            </div>
            {children.data ? (
                <div className="p-card">
                    <div className="p-flexbox">
                        <div className="p-flexbox__flexcontainer p-flexbox__flexcontainer--index">
                            {children.data.map((child, i) => (
                                <ul
                                    key={i}
                                    className="p-flexbox__flexitem"
                                >
                                    <li className="p-card p-card__header--index u-overflow">
                                        {/* ページネーション用に子ステップの番号を合わせる */}
                                        <p>
                                            STEP{i + 1 + (currentpage - 1) * 8}
                                        </p>
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
                                    {auth && (
                                        <CheckButton
                                            is_checked={is_checked[i]}
                                            endpoint={
                                                "/child/" + child.id + "/check"
                                            }
                                            show={show}
                                            edit={edit}
                                        ></CheckButton>
                                    )}
                                </ul>
                            ))}
                        </div>
                    </div>
                    {edit && (
                        <div className="c-link__detail">
                            <a href={"/postChild/" + step.id}>
                                子ステップ追加する
                            </a>
                        </div>
                    )}
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
