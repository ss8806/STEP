import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import LikeButton from "./LikeButton";

const Child = () => {
    const element = document.getElementById("child");

    var child;
    var is_liked;

    if (element && element.dataset.child) {
        child = JSON.parse(element.dataset.child);
    }

    if (element && element.dataset.is_liked) {
        is_liked = JSON.parse(element.dataset.is_liked);
    }

    return (
        <>
            <div>
                <div>{child.name}</div>
                <div>{child.content}</div>
                <div> {moment(child.updated_at).format("YYYY年MM月DD日")}</div>
                <LikeButton
                    is_liked={is_liked}
                    endpoint={"/child/" + child.id + "/like"}
                ></LikeButton>
            </div>
        </>
    );
};

export default Child;

if (document.getElementById("child")) {
    ReactDOM.render(<Child />, document.getElementById("child"));
}
