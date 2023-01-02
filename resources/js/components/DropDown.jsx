import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const DropDown = () => {
    const element = document.getElementById("dropdown");
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

    console.log(userName);

    return (
        <div className="c-dropdown">
            <div
                className="c-dropdown__user"
                onMouseEnter={handleToggle}
                onMouseLeave={handleToggle}
            >

                ようこそ　{userName} 様
                {open ? (
                    <div className="c-dropdown--content">
                            <a
                                className="c-dropdown__menu"

                                href=""   
                            >
                                マイページ 
                                                       </a>
                            <a
                                className="c-dropdown__menu"
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
                            </form>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default DropDown;

if (document.getElementById("dropdown")) {
    ReactDOM.render(<DropDown />, document.getElementById("dropdown"));
}
