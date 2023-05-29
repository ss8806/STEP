import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Validation from "./Validation";

const PostStep = () => {
    const element = document.getElementById("postStep");
    // バリデーションエラー
    let errors;
    // フォームに入力した内容(バリデーションが通らなかった)
    let oldname;
    let oldcontent;

    if (element && element.dataset.errors) {
        errors = JSON.parse(element.dataset.errors);
    }
    if (element && element.dataset.oldname) {
        oldname = JSON.parse(element.dataset.oldname);
        if (!oldname) {
            oldname = "";
        }
    }
    if (element && element.dataset.oldcontent) {
        oldcontent = JSON.parse(element.dataset.oldcontent);
        if (!oldcontent) {
            oldcontent = "";
        }
    }

    const [inputName, setInputName] = useState(oldname);
    const [inputContent, setInputContent] = useState(oldcontent);
    // ステップ名 フォームに入力した内容があればそちらを優先
    const [showNameVali, setShowNameVali] = useState(false);
    // ステップの内容 フォームに入力した内容があればそちらを優先
    const [showContentVali, setShowContentVali] = useState(false);
    // ステップ名を入力した際に更新される
    const onChangeInputName = (e) => {
        setInputName(e.target.value);
    };
    // ステップの内容を入力した際に更新される
    const onChangeInputContent = (e) => {
        setInputContent(e.target.value);
    };
    // ステップ名をクリックした際にバリデーションを表示する
    const onClickInputName = (e) => {
        setShowNameVali(true);
    };
    // ステップの内容をクリックした際にバリデーションを表示する
    const onClickInputContent = (e) => {
        setShowContentVali(true);
    };

    return (
        <div className="p-form">
            <label htmlFor="name" className="c-label">
                ステップ名
            </label>
            <Validation
                name={"ステップ名"}
                input={inputName}
                max={20}
                min={1}
                error={errors.name}
                show={showNameVali}
            ></Validation>
            <input
                id="name"
                type="text"
                className="c-input p-form__input--step"
                name="name"
                required
                onChange={onChangeInputName}
                onClick={onClickInputName}
                defaultValue={inputName}
            />
            <span className="c-count">文字数: {inputName.length}</span>

            <label htmlFor="content" className="c-label">
                ステップの内容
            </label>
            <Validation
                name={"内容"}
                input={inputContent}
                max={400}
                min={1}
                error={errors.content}
                show={showContentVali}
            ></Validation>
            <textarea
                id="content"
                className="c-textarea"
                name="content"
                required
                onChange={onChangeInputContent}
                onClick={onClickInputContent}
                value={inputContent}
            ></textarea>
            <span className="c-count">文字数: {inputContent.length}</span>

            <button type="submit" className="c-btn--edit">
                投稿する
            </button>
        </div>
    );
};

export default PostStep;

if (document.getElementById("postStep")) {
    ReactDOM.render(<PostStep />, document.getElementById("postStep"));
}
