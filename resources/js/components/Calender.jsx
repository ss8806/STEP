import React, { useReducer, useTransition } from "react";
import { render } from "react-dom";

const targetDom = document.getElementById("calendar");
const str_meetings = targetDom?.dataset.calendarMeetings;
const meetings = JSON.parse(str_meetings ?? "");
console.log(meetings);

export default function Calendar() {
    return <> {meetings[0].title} </>;
}

render(<Calendar />, targetDom);
