import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Validation from "./Validation";

const PostChild = () => {
    const element = document.getElementById("postChild");
    let step;
    // バリデーションエラー
    let errors;
    // フォームに入力した内容(バリデーションが通らなかった)
    let oldname;
    let oldcontent;

    if (element && element.dataset.step) {
        step = JSON.parse(element.dataset.step);
    }
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
    // バリデーションの表示状態
    const [showNameVali, setShowNameVali] = useState(false);
    const [showContentVali, setShowContentVali] = useState(false);
    // 子ステップ名を入力した際に更新される
    const onChangeInputName = (e) => {
        setInputName(e.target.value);
    };
    // 子ステップの内容を入力した際に更新される
    const onChangeInputContent = (e) => {
        setInputContent(e.target.value);
    };
    // 子ステップ名をクリックした際にバリデーションを表示する
    const onClickInputName = (e) => {
        setShowNameVali(true);
    };
    // 子ステップの内容をクリックした際にバリデーションを表示する
    const onClickInputContent = (e) => {
        setShowContentVali(true);
    };

    return (
        <div className="p-form">
            <p className="c-title__stepname">ステップ名:{step.name}</p>
            <label htmlFor="name" className="c-label">
                子ステップ名
            </label>
            <Validation
                name={"子ステップ名"}
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
                子ステップの内容
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

export default PostChild;

if (document.getElementById("postChild")) {
    ReactDOM.render(<PostChild />, document.getElementById("postChild"));
}
