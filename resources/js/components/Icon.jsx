import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Validation from "./Validation";

const Icon = () => {
    const element = document.getElementById("editIcon");
    var icon = [];
    icon = JSON.parse(element.dataset.icon);

    const [inputIcon, setIcon] = useState(icon);
    const [sucess, setSucess] = useState();
    const [error, setError] = useState();
    const [showIconVali, setShowIconVali] = useState(false);
    const awspath = "https://backend1219.s3.ap-northeast-1.amazonaws.com/";

    const imageHander = (e) => {
        const file = e.target.files[0];
        let imgTag = document.getElementById("preview");
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result;
            imgTag.src = result;
            inputIcon = setIcon(result);
        };
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .put("/editIcon", {
                icon: inputIcon,
            })
            .then((response) => {
                console.log(response.data);
                setSucess("更新しました");
                setError("");
            })
            .catch((error) => {
                {
                    // showをfalseにして子コンポーネントで表示できるようにする。
                    setShowIconVali(false);
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
        <>
            <div className="p-form p-form__group">
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
                                className="c-icon__profile"
                            ></img>
                        )) || (
                            <img
                                id="preview"
                                className="c-icon__profile"
                                src="/images/avatar-default.svg"
                            />
                        )}
                    </div>
                </label>
            </div>
            <div className="p-form p-form__group">
                <input
                    id="pic1"
                    type="file"
                    className="u-display--none"
                    accept="image/*"
                    src={icon}
                    onChange={imageHander}
                />
            </div>

            <div className="p-form p-form__group">
                <button
                    className="c-btn c-btn__edit"
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
