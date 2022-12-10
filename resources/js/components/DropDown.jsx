import React, { useReducer, useTransition, useRef } from "react";
import { render } from "react-dom";

const targetDom = document.getElementById("dropdown");
const str_user = targetDom?.dataset.user;
const user = JSON.parse(str_user ?? "");
const str_logout = targetDom?.dataset.logout;
const logout = JSON.parse(str_logout ?? "");
console.log(logout);

// const inputRef = useRef();
// const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputRef.current.value);
//     inputRef.current.value = "";
// };
const lo = (e) => {
    event.preventDefault();
    document.getElementById("logout-form").submit();
};

export default function DropDown() {
    return (
        <>
            <p>{user}</p>
            <ul className="c-dropdown">
                <li>
                    <form
                        id="logout-form"
                        action={logout}
                        method="POST"
                        className="d-none"
                    >
                        @csrf
                    </form>
                    <a className="dropdown-item" href={logout} onClick={lo}>
                        Logout
                    </a>
                </li>
            </ul>
        </>
    );
}

render(<DropDown />, targetDom);
