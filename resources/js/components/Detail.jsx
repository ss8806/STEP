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
        console.log(step);
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
            <section className="p-detail">
                <p className="p-detail__name">{step.name}</p>
                <p className="p-detail__content">{step.content}</p>
                <p>
                    投稿日: {moment(step.updated_at).format("YYYY年MM月DD日")}
                </p>
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
                    <p className="c-link">
                        <a href={"/step/" + step.id + "/edit"}>編集する</a>
                    </p>
                )}
            </section>
            {children.data ? (
                <section className="p-card">
                    <div className="p-flexbox">
                        <div className="p-flexbox__flexcontainer">
                            {children.data.map((child, i) => (
                                <ul
                                    key={i}
                                    className="p-card p-flexbox__flexitem"
                                >
                                    <li className="p-card__header u-overflow">
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
                                    <div className="c-link p-detail__link">
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
                        <div className="c-link p-detail__link">
                            <a href={"/postChild/" + step.id}>
                                子ステップ追加する
                            </a>
                        </div>
                    )}
                </section>
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
