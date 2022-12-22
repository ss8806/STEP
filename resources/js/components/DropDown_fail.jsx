import React, { useReducer, useTransition, useRef } from "react";
import { render } from "react-dom";

const targetDom = document.getElementById("dropdown");
const str_user = targetDom?.dataset.user;
const user = JSON.parse(str_user ?? "");
const str_logout = targetDom?.dataset.logout;
const logout = JSON.parse(str_logout ?? "");
console.log(logout);
const csrf = document // LaravelでPOSTメソッドを実行する際に必須のCSRF「トークン」を設定します。
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");
// const inputRef = useRef();
// const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputRef.current.value);
//     inputRef.current.value = "";
// };
const lo = (e) => {
    e.preventDefault();
    document.getElementById("logout-form").submit();
};

export default function DropDown() {
    return (
        <>
            <p class="c-dropdown__user">{user}</p>

            <ul className="c-dropdown">
                <li>
                    <a className="dropdown-item" href={logout} onClick={lo}>
                        Logout
                    </a>
                    <form id="logout-form" action={logout} method="POST">
                        <input type="hidden" name="_token" value={csrf} />
                    </form>
                </li>
            </ul>
        </>
    );
}
render(<DropDown />, targetDom);
