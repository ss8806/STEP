import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Validation from "./Validation";

const EditChild = () => {
    const element = document.getElementById("editChild");
    // バリデーションエラー
    let errors;
    let step;
    let child;
    // フォームに入力した内容(バリデーションが通らなかった)
    let oldname;
    let oldcontent;

    if (element && element.dataset.errors) {
        errors = JSON.parse(element.dataset.errors);
    }
    if (element && element.dataset.step) {
        step = JSON.parse(element.dataset.step);
    }
    if (element && element.dataset.child) {
        child = JSON.parse(element.dataset.child);
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
    // 子ステップ名 フォームに入力した内容があればそちらを優先
    const [inputName, setInputName] = useState(oldname || child.name);
    // 子ステップの内容 フォームに入力した内容があればそちらを優先
    const [inputContent, setInputContent] = useState(
        oldcontent || child.content
    );
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
            <p className="c-title__stepname">ステップ名:{step[0].name}</p>
            <label htmlFor="name" className="c-label">
                子ステップ名
            </label>
            <Validation
                name={"ステップ名"}
                // 入力内容
                input={inputName}
                // 最大文字数
                max={30}
                // 最小文字数
                min={1}
                // バリデーションチェックの内容
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
                className="c-textarea "
                name="content"
                required
                onChange={onChangeInputContent}
                onClick={onClickInputContent}
                value={inputContent}
            ></textarea>
            <span className="c-count">文字数: {inputContent.length}</span>

            <button type="submit" className="c-btn--edit">
                編集する
            </button>
        </div>
    );
};

export default EditChild;

if (document.getElementById("editChild")) {
    ReactDOM.render(<EditChild />, document.getElementById("editChild"));
}
