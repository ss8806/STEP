import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

const Posts = () => {
    const element = document.getElementById("posts");

    var posts;

    if (element && element.dataset.posts) {
        posts = JSON.parse(element.dataset.posts);
    }

    return (
        <>
            <p className="c-title c-title__mypage">投稿したSTEP</p>
            <div className="p-card">
                <div className="c-flexbox--index">
                    <div className="c-flexbox__flexcontainer c-flexbox__flexcontainer--index">
                        {posts.map((challenge, i) => (
                            <ul
                                key={i}
                                className="c-flexbox__flexitem c-flexbox__flexitem--index"
                            >
                                <li className="p-card p-card__header--index u-overflow">
                                    {challenge.name}
                                </li>
                                <li className="p-card__body">
                                    <p>投稿日</p>
                                    {moment(challenge.updated_at).format(
                                        "YYYY年MM月DD日"
                                    )}
                                </li>

                                <div className="c-link--detail">
                                    <a href={"step/" + challenge.id + "/show"}>
                                        編集する
                                    </a>
                                </div>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Posts;

if (document.getElementById("posts")) {
    ReactDOM.render(<Posts />, document.getElementById("posts"));
}
