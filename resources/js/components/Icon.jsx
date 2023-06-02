import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Validation from "./Validation";

const Icon = () => {
    const element = document.getElementById("editIcon");
    // アイコンの初期状態
    let icon = [];
    icon = JSON.parse(element.dataset.icon);
    // アイコンの状態
    let [inputIcon, setIcon] = useState(icon);
    // バリデーション成功
    const [sucess, setSucess] = useState();
    // バリデーションエラー
    const [error, setError] = useState();
    // バリデーションの表示の状態
    const [showIconVali, setShowIconVali] = useState(false);
    // アイコンの保存先（aws s3）
    const awspath = "https://backend1219.s3.ap-northeast-1.amazonaws.com/";
    // アイコン画像を取得
    const imageHander = (e) => {
        // バリデーションを初期化
        setSucess("");
        setError("");
        const file = e.target.files[0];
        if (!file.type.match("image.*")) {
            setError("画像を選択してください");
            return;
        }
        let imgTag = document.getElementById("preview");
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result;
            imgTag.srcset = result;
            inputIcon = setIcon(result);
        };
    };
    // メールアドレスを非同期通信で送信する
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .put("/editIcon", {
                icon: inputIcon,
            })
            .then((response) => {
                setSucess("更新しました");
                setError("");
            })
            .catch((error) => {
                {
                    // showをfalseにして子コンポーネントで表示できるようにする。
                    setShowIconVali(false);
                    if (error.response?.status) {
                        setSucess("");
                        setError(error.response.data.errors.icon);
                    }
                }
            });
    };

    return (
        <>
            <div className="p-form">
                <p>
                    <label htmlFor="pic1" className="c-label">
                        アイコン
                    </label>
                </p>
                <Validation
                    name={"アイコン"}
                    input={inputIcon}
                    max={0}
                    min={0}
                    show={showIconVali}
                    sucess={sucess}
                    error={error}
                ></Validation>
                <label htmlFor="pic1" className="c-label">
                    <div>
                        {(icon && (
                            <img
                                id="preview"
                                src={awspath + icon}
                                className="c-icon p-profile__icon"
                            ></img>
                        )) || (
                            <img
                                id="preview"
                                className="c-icon p-profile__icon"
                                src="/images/avatar-default.svg"
                                srcset="images/avatar-default.svg 1x, images/avatar-default@2x.svg 2x"
                            />
                        )}
                    </div>
                </label>
            </div>
            <div className="p-forp">
                <input
                    id="pic1"
                    type="file"
                    className="u-display--none"
                    accept="image/*"
                    src={icon}
                    onChange={imageHander}
                />
            </div>

            <div className="p-forp">
                <button
                    className="c-btn c-btn--edit"
                    type="submit"
                    onClick={onSubmit}
                >
                    アイコンを変更
                </button>
            </div>
        </>
    );
};
export default Icon;

if (document.getElementById("editIcon")) {
    ReactDOM.render(<Icon />, document.getElementById("editIcon"));
}
