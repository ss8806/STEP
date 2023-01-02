import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Hamberger = () => {
    const element = document.getElementById("hamberger");
    var userName = [];
    var logout = [];
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
                    <div className="hamburger--active" onClick={handleToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="slide-menu">
                        <li> <a href="mypage">マイページ</a> </li>
                        <li> <a
                            href={logout}
                            onClick={lof}
                        >
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
                            </form></li>
                    </ul>
                </>
            ) : (
                <>

                    <div className="hamburger" onClick={handleToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
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
