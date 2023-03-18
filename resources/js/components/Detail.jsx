import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import LikeButton from "./LikeButton";

const Detail = () => {
    const element = document.getElementById("detail");

    // if (element && element.dataset.detail) {
    // detail = JSON.parse(element.dataset.detail);
    // }
    var detail;
    var is_liked;

    if (element && element.dataset.detail) {
        detail = JSON.parse(element.dataset.detail);
    }

    if (element && element.dataset.is_liked) {
        is_liked = JSON.parse(element.dataset.is_liked);
    }

    return (
        <>
            <div className="App">
                <div>{detail.name}</div>
                <div>{detail.price}</div>
                <div> {moment(detail.updated_at).format("YYYY年MM月DD日")}</div>
                <LikeButton
                    is_liked={is_liked}
                    endpoint={"/stock/" + detail.id + "/like"}
                ></LikeButton>
            </div>
        </>
    );
};

export default Detail;

if (document.getElementById("detail")) {
    ReactDOM.render(<Detail />, document.getElementById("detail"));
}
