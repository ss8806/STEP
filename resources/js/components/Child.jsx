import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import CheckButton from "./CheckButton";

const Child = () => {
    const element = document.getElementById("child");

    var child;
    var is_checked;
    var show;
    var auth;
    var edit;

    if (element && element.dataset.child) {
        child = JSON.parse(element.dataset.child);
        console.log(child);
    }

    if (element && element.dataset.is_checked) {
        is_checked = JSON.parse(element.dataset.is_checked);
    }

    if (element && element.dataset.show) {
        show = JSON.parse(element.dataset.show);
    }

    if (element && element.dataset.auth) {
        auth = JSON.parse(element.dataset.auth);
    }

    if (child[0].user_id === auth.id) {
        edit = true;
    }

    return (
        <div className="p-content">
            <div>{child[0].name}</div>
            <div>{child[0].content}</div>
            <div> {moment(child[0].updated_at).format("YYYY年MM月DD日")}</div>
            {auth && (
                <CheckButton
                    is_checked={is_checked}
                    endpoint={"/child/" + child[0].id + "/check"}
                    show={show}
                ></CheckButton>
            )}
            {edit && (
                <div className="c-link--detail">
                    <a href={"/child/" + child[0].id + "/edit"}>編集する</a>
                </div>
            )}
        </div>
    );
};

export default Child;

if (document.getElementById("child")) {
    ReactDOM.render(<Child />, document.getElementById("child"));
}
