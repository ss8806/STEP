import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Hamberger = () => {
    const element = document.getElementById("hamberger");
    var userName = [];
    var logout = [];
    const [open, setOpen] = useState(false);

    // document.querySelector('.hamburger').addEventListener('click', function(){
    //     this.classList.toggle('active');
    //     document.querySelector('.slide-menu').classList.toggle('active');
    // })

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    //     if (element && element.dataset.user) {
    //         userName = JSON.parse(element.dataset.user);
    //         logout = JSON.parse(element.dataset.logout);
    //     }

    //     const csrf = document // LaravelでPOSTメソッドを実行する際に必須のCSRF「トークン」を設定します。
    //     .querySelector('meta[name="csrf-token"]')
    //     .getAttribute("content");

    // const lof = (e) => {
    //     e.preventDefault();
    //     document.getElementById("logout-form").submit();
    // };


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
                        <li>メニュー</li>
                        <li>メニュー2</li>
                        <li>メニュー3</li>
                        <li>メニュー4</li>
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
