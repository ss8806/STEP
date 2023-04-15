import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Validation from "./Validation";

const Email = () => {
    const element = document.getElementById("editEmail");
    var email = [];
    email = JSON.parse(element.dataset.email);

    const [inputEmail, setEmail] = useState(email);
    const [sucess, setSucess] = useState();
    const [error, setError] = useState();

    const onHandleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmitEmail = () => {
        // e.preventDefault();
        axios
            // データはjson形式で渡してControllerで処理
            .put("/editEmail", { editEmail: inputEmail })
            .then((response) => {
                console.log(response.config.data);
                setSucess("更新しました");
                setError("");
            })
            .catch((error) => {
                {
                    // 失敗時の処理
                    switch (error.response?.status) {
                        case 401:
                            setError("更新できませんでした");
                        case 403:
                            setError("更新できませんでした");
                        case 500:
                            setError("更新できませんでした");
                        default:
                            console.log(error.response.data);
                            setSucess("");
                            setError(error.response.data.errors.editEmail);
                    }
                }
            });
    };

    return (
        <>
            <section className="">
                <p>
                    <label htmlFor="inputEmail">Email</label>
                </p>

                <input
                    id="inputEmail"
                    type="email"
                    name="editEmail"
                    className="c-input__email"
                    placeholder="メールアドレス"
                    defaultValue={inputEmail}
                    required
                    onChange={onHandleChangeEmail}
                />
                <div className="c-sucess"> {sucess}</div>
                <div className="c-error"> {error}</div>
                <button
                    className="c-btn c-btn__edit"
                    onClick={handleSubmitEmail}
                >
                    メールアドレスを変更
                </button>
            </section>
        </>
    );
};

export default Email;

if (document.getElementById("editEmail")) {
    ReactDOM.render(<Email />, document.getElementById("editEmail"));
}
