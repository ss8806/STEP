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
    var step;

    if (element && element.dataset.child) {
        child = JSON.parse(element.dataset.child);
    }

    if (element && element.dataset.is_checked) {
        is_checked = JSON.parse(element.dataset.is_checked);
    }

    if (element && element.dataset.show) {
        show = JSON.parse(element.dataset.show);
    }

    if (element && element.dataset.step) {
        step = JSON.parse(element.dataset.step);
    }

    if (element && element.dataset.auth) {
        auth = JSON.parse(element.dataset.auth);
        if (auth) {
            if (step[0].user_id === auth.id) {
                edit = true;
            }
        }
    }

    return (
        <section className="p-content">
            <p>{child.name}</p>
            <p>{child.content}</p>
            <p> {moment(child.updated_at).format("YYYY年MM月DD日")}</p>
            {auth && (
                <CheckButton
                    is_checked={is_checked}
                    endpoint={"/child/" + child.id + "/check"}
                    show={show}
                ></CheckButton>
            )}
            {edit && (
                <p className="c-link">
                    <a href={"/child/" + child.id + "/edit"}>編集する</a>
                </p>
            )}
        </section>
    );
};

export default Child;

if (document.getElementById("child")) {
    ReactDOM.render(<Child />, document.getElementById("child"));
}
