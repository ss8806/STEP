import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import LikeButton from "./LikeButton";

const Detail = () => {
    const element = document.getElementById("detail");

    var detail;
    var children;
    var is_liked;

    if (element && element.dataset.detail) {
        detail = JSON.parse(element.dataset.detail);
    }

    if (element && element.dataset.children) {
        children = JSON.parse(element.dataset.children);
        console.log(children);
    }

    if (element && element.dataset.is_liked) {
        is_liked = JSON.parse(element.dataset.is_liked);
    }

    return (
        <>
            <div>
                <div>{detail.name}</div>
                <div> {moment(detail.updated_at).format("YYYY年MM月DD日")}</div>
            </div>
            <>
                {children ? (
                    <div className="p-card">
                        <div className="c-flexbox--index">
                            <div className="c-flexbox__flexcontainer c-flexbox__flexcontainer--index">
                                {children.map((child, i) => (
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
                                        <LikeButton
                                            is_liked={child.likes[0]}
                                            endpoint={
                                                "/child/" + child.id + "/like"
                                            }
                                        ></LikeButton>
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
