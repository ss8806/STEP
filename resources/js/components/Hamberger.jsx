import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Hamberger = () => {
    const element = document.getElementById("hamberger");
    let userName = [];
    let logout = [];
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    if (element && element.dataset.user) {
        userName = JSON.parse(element.dataset.user);
        logout = JSON.parse(element.dataset.logout);
    }

    const csrf = document // LaravelでPOSTメソッドを実行する際に必須のCSRF「トークン」を設定します。
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");

    const lof = (e) => {
        e.preventDefault();
        document.getElementById("logout-form").submit();
    };

    return (
        <>
            {open ? (
                <>
                    <div
                        className="p-hamburger p-hamburger--active"
                        onClick={handleToggle}
                    >
                        <span className="p-hamburger__span p-hamburger__firstspan--active"></span>
                        <span className="p-hamburger__span p-hamburger__secondspan--active"></span>
                        <span className="p-hamburger__span p-hamburger__thirdspan--active"></span>
                    </div>
                    <ul className="p-hamburger__slidemenu">
                        <li>
                            <a className="c-link" href="/mypage">
                                マイページ
                            </a>
                        </li>
                        <li>
                            <a className="c-link" href={logout} onClick={lof}>
                                Logout
                            </a>
                            <form
                                id="logout-form"
                                action={logout}
                                method="POST"
                            >
                                <input
                                    type="hidden"
                                    name="_token"
                                    value={csrf}
                                />
                            </form>
                        </li>
                    </ul>
                </>
            ) : (
                <>
                    <div className="p-hamburger" onClick={handleToggle}>
                        <span className="p-hamburger__span p-hamburger__firstspan"></span>
                        <span className="p-hamburger__span p-hamburger__secondspan"></span>
                        <span className="p-hamburger__span p-hamburger__thirdspan"></span>
                    </div>
                </>
            )}
        </>
    );
};

export default Hamberger;

if (document.getElementById("hamberger")) {
    ReactDOM.render(<Hamberger />, document.getElementById("hamberger"));
}
