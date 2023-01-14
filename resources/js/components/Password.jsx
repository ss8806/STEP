import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Password = () => {
    const [Password, setPassword] = useState();
    const [sucess, setSucess] = useState();
    const [error, setError] = useState();

    const onHandleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmitPassword = () => {
        axios
            // データはjson形式で渡してControllerで処理
            .put("/editPassword", { editPassword: Password })
            .then((response) => {
                //console.log(response.config.data);
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
                            setError(error.response.data.errors.editPassword);
                    }
                }
            });
    };

    return (
        <>
            <section className="">
                <label htmlFor="inputEmail">Password</label>
                <input
                    type="password"
                    name="editPassword"
                    className=""
                    placeholder="パスワード"
                    required
                    onChange={onHandleChangePassword}
                />
                <div className="c-sucess"> {sucess}</div>
                <div className="c-error"> {error}</div>
                <button className="" onClick={handleSubmitPassword}>
                    パスワードを変更
                </button>
            </section>
        </>
    );
};

export default Password;

if (document.getElementById("editPassword")) {
    ReactDOM.render(<Password />, document.getElementById("editPassword"));
}
