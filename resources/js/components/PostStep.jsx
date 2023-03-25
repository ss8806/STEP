import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const PostStep = () => {
    const element = document.getElementById("postStep");
    var errors;

    if (element && element.dataset.errors) {
        errors = JSON.parse(element.dataset.errors);
    }

    return (
        <>
            <div className="p-form p-form__group">
                <label htmlFor="name" className="c-label">
                    ステップ名
                </label>
                <p className="c-error">{errors.name}</p>
                <div className="c-input">
                    <input
                        id="name"
                        type="text"
                        className="c-input__product"
                        name="name"
                        required
                    />
                </div>
                <div className="p-form p-form__group"> </div>

                <label htmlFor="content" className="c-label">
                    ステップの内容
                </label>
                <p className="c-error">{errors.content}</p>
                <div className="c-textarea">
                    <textarea
                        id="content"
                        className="c-textarea__product"
                        name="content"
                        required
                    ></textarea>
                </div>
                <div className="p-form__group">
                    <button type="submit" className="c-btn">
                        投稿する
                    </button>
                </div>
            </div>
        </>
    );
};

export default PostStep;

if (document.getElementById("postStep")) {
    ReactDOM.render(<PostStep />, document.getElementById("postStep"));
}
