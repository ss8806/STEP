import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Validation from "./Validation";
// メールアドレスを編集
const Email = () => {
    const element = document.getElementById("editEmail");
    // メールアドレスの初期状態
    let email = [];
    email = JSON.parse(element.dataset.email);
    // メールアドレスの入力内容
    const [inputEmail, setEmail] = useState(email);
    // バリデーション成功
    const [sucess, setSucess] = useState();
    // バリデーションエラー
    const [error, setError] = useState();
    // バリデーションの表示の状態
    const [showEmailVali, setShowEmailVali] = useState(false);
    // メールの内容を入力した際に更新される
    const onHandleChangeEmail = (e) => {
        setEmail(e.target.value);
        // テキスト入力したさいに「更新しました」を削除する
        setSucess("");
    };
    // メールアドレスのフォームをクリックしたさいにバリデーションを表示
    const onClickInputEmail = (e) => {
        setShowEmailVali(true);
    };
    // アイコンを非同期通信で送信する
    const handleSubmitEmail = () => {
        axios
            // データはjson形式で渡してControllerで処理
            .put("/editEmail", { editEmail: inputEmail })
            .then((response) => {
                setSucess("更新しました");
                setError("");
            })
            .catch((error) => {
                {
                    // 子コンポーネントに渡すshowをfalseにしてでサーバサイドのエラーを表示できるようにする。
                    setShowEmailVali(false);
                    if (error.response?.status) {
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
