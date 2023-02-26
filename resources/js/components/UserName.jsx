import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const UserName = () => {
    const element = document.getElementById("editUserName");
    var username = [];
    username = JSON.parse(element.dataset.username);

    const [UserName, setUserName] = useState(username);
    const [sucess, setSucess] = useState();
    const [error, setError] = useState();

    const onHandleChangeUserName = (e) => {
        setUserName(e.target.value);
    };

    const handleSubmitUserName = () => {
        // e.preventDefault();
        axios
            // データはjson形式で渡してControllerで処理
            .put("/editUserName", { editUserName: UserName })
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
                            setError(error.response.data.errors.editUserName);
                    }
                }
            });
    };

    return (
        <>
            <section className="">
                <label htmlFor="inputUserName">名前</label>
                <input
                    id="inputUserName"
                    type="username"
                    name="editUserName"
                    className=""
                    placeholder="ユーザーネーム"
                    defaultValue={UserName}
                    required
                    onChange={onHandleChangeUserName}
                />
                <div className="c-sucess"> {sucess}</div>
                <div className="c-error"> {error}</div>
                <button
                    className="c-btn c-btn__edit"
                    onClick={handleSubmitUserName}
                >
                    名前を変更
                </button>
            </section>
        </>
    );
};

export default UserName;

if (document.getElementById("editUserName")) {
    ReactDOM.render(<UserName />, document.getElementById("editUserName"));
}
