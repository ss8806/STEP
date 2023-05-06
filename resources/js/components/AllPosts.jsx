import React, { useState} from "react";
import ReactDOM from "react-dom";
import moment from "moment";

const AllPosts = () => {
    const element = document.getElementById("allPosts");

    var allPosts;

    if (element && element.dataset.allposts) {
        allPosts = JSON.parse(element.dataset.allposts);
    }

    return (
        <>
            <p className="c-title p-mypage__title">投稿したSTEP</p>
            <section className="p-card">
                <div className="p-flexbox">
                    <div className="p-flexbox__flexcontainer">
                        {allPosts.data.map((challenge, i) => (
                            <ul
                                key={i}
                                className="p-flexbox__flexitem"
                            >
                                <li className="p-card__header u-overflow">
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
            </section>
        </>
    );
};

export default AllPosts;

if (document.getElementById("allPosts")) {
    ReactDOM.render(<AllPosts />, document.getElementById("allPosts"));
}
