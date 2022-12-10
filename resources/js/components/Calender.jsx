import React, { useReducer, useTransition } from "react";
import { render } from "react-dom";

const targetDom = document.getElementById("calendar");
const str_meetings = targetDom?.dataset.calendarMeetings;
const meetings = JSON.parse(str_meetings ?? "");
console.log(meetings);
const str_user = targetDom?.dataset.user;
const user = JSON.parse(str_user ?? "");
console.log(user);

export default function Calendar() {
    return (
        <>
            <p>{meetings[0].title}</p>
            <p>{user}</p>
        </>
    );
}

render(<Calendar />, targetDom);
