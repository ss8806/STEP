import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Icon = () => {
    const element = document.getElementById("editIcon");
    var icon = [];
    icon = JSON.parse(element.dataset.icon);
    const awspath = "https://backend1219.s3.ap-northeast-1.amazonaws.com/";
    const imageHander = (e) => {
        const file = e.target.files[0];
        let imgTag = document.getElementById("preview");
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result;
            imgTag.src = result;
            icon = result;
        };
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .put("/editIcon", {
                icon: icon,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(response.data);
            });
    };

    return (
        <>
            <div className="p-form p-form__group">
                <label htmlFor="pic1" className="">
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
                    // name="pic1"
                    id="pic1"
                    type="file"
                    className="u-display--none"
                    accept="image/*"
                    src={icon}
                    // {...register("pic1", { required: true })}
                    onChange={imageHander}
                />
            </div>
            <div className="p-form p-form__group">
                <button
                    className="c-btn c-btn__icon"
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
