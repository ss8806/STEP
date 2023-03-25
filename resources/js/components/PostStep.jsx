import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const PostStep = () => {
    const element = document.getElementById("postStep");
    // var aboveday;
    // var belowday;

    // if (element && element.dataset.aboveday) {
    //     aboveday = JSON.parse(element.dataset.aboveday);
    //     belowday = JSON.parse(element.dataset.belowday);
    // }

    return (
        <>
            <div class="p-form p-form__group">
                <label for="name" class="c-label">
                    アイディア名
                </label>
                <div class="c-input">
                    <input
                        id="name"
                        type="text"
                        class="c-input__product"
                        name="name"
                        required
                    />
                </div>
                <div class="p-form p-form__group"> </div>

                <label for="content" class="c-label">
                    アイディアの内容
                </label>
                <div class="c-textarea">
                    <textarea
                        id="content"
                        class="c-textarea__product"
                        name="content"
                        required
                    ></textarea>
                </div>
                <div class="p-form__group">
                    <button type="submit" class="c-btn">
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
