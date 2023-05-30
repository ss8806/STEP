import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import ChallengeButton from "./ChallengeButton";
import CheckButton from "./CheckButton";

const Detail = () => {
    const element = document.getElementById("detail");
    // 親ステップ
    let step;
    // 子ステップ一覧
    let children;
    // 親ステップのチャレンジ状態
    let is_challenged;
    // 子ステップ一覧のチェック状態
    let is_checked;
    // ログインユーザー
    let auth;
    // 投稿者
    let edit;
    // ページネーションの現在のページ
    let currentpage;

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
        // 投稿者を判別
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
                {/* ツイッターの投稿 */}
                <div className="c-tweet">
                    <a
                        // クエリパラメータの設定でデフォルトの内容を設定
                        href={"https://twitter.com/share?text=" + step.name}
                        className="twitter-share-button"
                        data-show-count="false"
                    ></a>
                </div>
            </section>
            {children.data ? (
                <section className="p-card">
                    <div className="p-flexbox">
                        <div className="p-flexbox__flexcontainer p-flexbox__flexcontainer--index">
                            {children.data.map((child, i) => (
                                <ul
                                    key={i}
                                    className="p-flexbox__flexitem p-flexbox__flexitem--detail"
                                >
                                    <li className="p-card__header p-card__header--detail">
                                        {/* ページネーション用に子ステップの番号を合わせる */}
                                        <p className="p-card__stepnum">
                                            STEP{i + 1 + (currentpage - 1) * 8}
                                        </p>
                                        <p className="u-overflow">
                                            {child.name}
                                        </p>
                                    </li>
                                    <li className="p-card__body">
                                        投稿日:
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
