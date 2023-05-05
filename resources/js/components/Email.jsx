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
    const [showEmailVali, setShowEmailVali] = useState(false);

    const onHandleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onClickInputEmail = (e) => {
        setShowEmailVali(true);
    };

    const handleSubmitEmail = () => {
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
                    // showをfalseにして子コンポーネントで表示できるようにする。
                    setShowEmailVali(false);
                    switch (error.response?.status) {
                        case 401:
                            setError("更新できませんでした");
                        case 403:
                            setError("更新できませんでした");
                        case 500:
                            setError("更新できませんでした");
                        default:
                            // console.log(error.response.data);
                            setSucess("");
                            setError(error.response.data.errors.editEmail);
                    }
                }
            });
    };

    return (
        <section className="p-form">
            <p>
                <label htmlFor="inputEmail" className="c-label">
                    Email
                </label>
            </p>
            <Validation
                name={"メール"}
                input={inputEmail}
                max={30}
                min={0}
                show={showEmailVali}
                sucess={sucess}
                error={error}
            ></Validation>
            <input
                id="inputEmail"
                type="email"
                name="editEmail"
                className="c-input p-profile__input"
                placeholder="メールアドレス"
                defaultValue={inputEmail}
                required
                onChange={onHandleChangeEmail}
                onClick={onClickInputEmail}
            />
            <p className="c-count">文字数: {inputEmail.length}</p>
            <button className="c-btn c-btn--edit" onClick={handleSubmitEmail}>
                メールアドレスを変更
            </button>
        </section>
    );
};

export default Email;

if (document.getElementById("editEmail")) {
    ReactDOM.render(<Email />, document.getElementById("editEmail"));
}
