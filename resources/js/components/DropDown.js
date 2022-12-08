import React from "react";
import ReactDOM from "react-dom";

function DropDown(props) {
    return (
        <div className="container">
            <div>{{ fuga }}</div>
            <ul className="c-dropdown"></ul>
            <li>
                <a href className="c-dropdown__menu">
                    マイページ
                </a>
            </li>
            <li>
                <a haref className="c-dropdown__menu">
                    投稿する
                </a>
            </li>
            <li>
                <a className="c-dropdown__menu" id="header-nav__logout">
                    ログアウト
                </a>
                <form id="logout-form" action="/logout" method="POST">
                    <input type="hidden" name="_token" value="csrf" />
                </form>
            </li>

            <form id="logout-form" action="/logout" method="POST">
                <input type="hidden" name="_token" />
            </form>
        </div>
    );
}

export default DropDown;

if (document.getElementById("dropdown")) {
    ReactDOM.render(<DropDown />, document.getElementById("dropdown"));
}
