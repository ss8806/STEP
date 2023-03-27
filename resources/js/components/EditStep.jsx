import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import LengthValidation from "./LengthValidation";

const EditStep = () => {
    const element = document.getElementById("editStep");
    var errors;
    var step;

    if (element && element.dataset.errors) {
        errors = JSON.parse(element.dataset.errors);
    }
    if (element && element.dataset.step) {
        step = JSON.parse(element.dataset.step);
    }

    const [inputName, setInputName] = useState(step.name);
    const [inputContent, setInputContent] = useState(step.content);
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
        <>
            <div className="p-form p-form__group">
                <label htmlFor="name" className="c-label">
                    ステップ名
                </label>
                <LengthValidation
                    name={"ステップ名"}
                    input={inputName}
                    max={10}
                    min={1}
                    errors={errors.name}
                    show={showNameVali}
                ></LengthValidation>
                <input
                    id="name"
                    type="text"
                    className="c-input__step"
                    name="name"
                    required
                    onChange={onChangeInputName}
                    onClick={onClickInputName}
                    defaultValue={inputName}
                />
                <span className="c-count__right">
                    文字数: {inputName.length}
                </span>
            </div>

            <div className="p-form p-form__group">
                <label htmlFor="content" className="c-label">
                    ステップの内容
                </label>
                <LengthValidation
                    name={"内容"}
                    input={inputContent}
                    max={10}
                    min={1}
                    errors={errors.content}
                    show={showContentVali}
                ></LengthValidation>
                <textarea
                    id="content"
                    className="c-textarea__step"
                    name="content"
                    required
                    onChange={onChangeInputContent}
                    onClick={onClickInputContent}
                    value={inputContent}
                ></textarea>
                <span className="c-count__right">
                    文字数: {inputContent.length}
                </span>
            </div>

            <div className="p-form__group">
                <button type="submit" className="c-btn__edit">
                    投稿する
                </button>
            </div>
        </>
    );
};

export default EditStep;

if (document.getElementById("editStep")) {
    ReactDOM.render(<EditStep />, document.getElementById("editStep"));
}
