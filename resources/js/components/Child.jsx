import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import CheckButton from "./CheckButton";

const Child = () => {
    const element = document.getElementById("child");

    var child;
    var is_checked;
    var show;

    if (element && element.dataset.child) {
        child = JSON.parse(element.dataset.child);
    }

    if (element && element.dataset.is_checked) {
        is_checked = JSON.parse(element.dataset.is_checked);
    }

    if (element && element.dataset.show) {
        show = JSON.parse(element.dataset.show);
    }

    return (
        <>
            <div>
                <div>{child.name}</div>
                <div>{child.content}</div>
                <div> {moment(child.updated_at).format("YYYY年MM月DD日")}</div>
                <CheckButton
                    is_checked={is_checked}
                    endpoint={"/child/" + child.id + "/check"}
                    show={show}
                ></CheckButton>
            </div>
        </>
    );
};

export default Child;

if (document.getElementById("child")) {
    ReactDOM.render(<Child />, document.getElementById("child"));
}
