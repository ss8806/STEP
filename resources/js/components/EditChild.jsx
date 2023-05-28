import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Validation from "./Validation";

const EditChild = () => {
    const element = document.getElementById("editChild");
    let errors;
    let step;
    let child;

    if (element && element.dataset.errors) {
        errors = JSON.parse(element.dataset.errors);
    }
    if (element && element.dataset.step) {
        step = JSON.parse(element.dataset.step);
    }
    if (element && element.dataset.child) {
        child = JSON.parse(element.dataset.child);
    }

    const [inputName, setInputName] = useState(child.name);
    const [inputContent, setInputContent] = useState(child.content);
    const [showNameVali, setShowNameVali] = useState(false);
    const [showContentVali, setShowContentVali] = useState(false);

    const onChangeInputName = (e) => {
        setInputName(e.target.value);
    };

    const onChangeInputContent = (e) => {
        setInputContent(e.target.value);
    };

    const onClickInputName = (e) => {
        setShowNameVali(true);
    };

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
