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
            // console.log(icon);
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
        <section className="text-center">
            <section className="text-center">
                <div>
                    <label htmlFor="pic1" className="display: inline-block">
                        <div>
                            {(icon && (
                                <img
                                    id="preview"
                                    src={awspath + icon}
                                    className=""
                                ></img>
                            )) || (
                                <img
                                    id="preview"
                                    className=""
                                    src="/images/avatar-default.svg"
                                />
                            )}
                        </div>
                    </label>
                </div>
                <input
                    // name="pic1"
                    id="pic1"
                    type="file"
                    className=""
                    accept="image/*"
                    src={icon}
                    // {...register("pic1", { required: true })}
                    onChange={imageHander}
                />
                <p className="text-red-500">
                    {/* {errors.pic1 && "写真を登録して下さい。"} */}
                </p>
            </section>
            <button className="" type="submit" onClick={onSubmit}>
                アイコンを変更
            </button>
        </section>
    );
};
export default Icon;

if (document.getElementById("editIcon")) {
    ReactDOM.render(<Icon />, document.getElementById("editIcon"));
}
