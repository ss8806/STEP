import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

const Posts = () => {
    const element = document.getElementById("posts");
    // 投稿したステップ一覧
    let posts;
    if (element && element.dataset.posts) {
        posts = JSON.parse(element.dataset.posts);
    }

    return (
        <>
            <p className="c-title p-mypage__title">投稿したSTEP</p>
            <section className="p-card">
                <div className="p-flexbox">
                    <div className="p-flexbox__flexcontainer">
                        {posts.data.map((challenge, i) => (
                            <ul key={i} className="p-flexbox__flexitem">
                                <li className="p-card__header u-overflow">
                                    {challenge.name}
                                </li>
                                <li className="p-card__body">
                                    投稿日:
                                    {moment(challenge.updated_at).format(
                                        "YYYY年MM月DD日"
                                    )}
                                </li>

                                <div className="c-link ">
                                    <a href={"step/" + challenge.id + "/show"}>
                                        詳細を見る
                                    </a>
                                </div>
                            </ul>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Posts;

if (document.getElementById("posts")) {
    ReactDOM.render(<Posts />, document.getElementById("posts"));
}
