import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Validation from "./Validation";

const Produce = () => {
    const element = document.getElementById("editProduce");
    let produce = [];
    produce = JSON.parse(element.dataset.produce);

    const [inputProduce, setProduce] = useState(produce);
    const [sucess, setSucess] = useState();
    const [error, setError] = useState();
    const [showProduceVali, setShowProduceVali] = useState(false);

    const onHandleChangeProduce = (e) => {
        setProduce(e.target.value);
        // テキスト入力したさいに「更新しました」を削除する
        setSucess("");
    };

    const onClickInputProduce = (e) => {
        setShowProduceVali(true);
    };

    const handleSubmitProduce = () => {
        axios
            // データはjson形式で渡してControllerで処理
            .put("/editProduce", { editProduce: inputProduce })
            .then((response) => {
                setSucess("更新しました");
                setError("");
            })
            .catch((error) => {
                {
                    // showをfalseにして子コンポーネントで表示できるようにする。
                    setShowProduceVali(false);
                    switch (error.response?.status) {
                        case 401:
                            setError("更新できませんでした");
                        case 403:
                            setError("更新できませんでした");
                        case 500:
                            setError("更新できませんでした");
                        default:
                            setSucess("");
                            setError(error.response.data.errors.editProduce);
                    }
                }
            });
    };

    return (
        <>
            <section className="p-form">
                <p>
                    <label htmlFor="inputproduce" className="c-label">
                        自己紹介
                    </label>
                </p>
                <Validation
                    name={"自己紹介"}
                    input={inputProduce}
                    max={300}
                    min={1}
                    show={showProduceVali}
                    sucess={sucess}
                    error={error}
                ></Validation>
                <textarea
                    id="inputproduce"
                    className="c-textarea"
                    name="editProduce"
                    required
                    defaultValue={inputProduce}
                    onChange={onHandleChangeProduce}
                    onClick={onClickInputProduce}
                ></textarea>
                <p className="c-count">文字数: {inputProduce.length}</p>
                <button
                    className="c-btn c-btn--edit"
                    onClick={handleSubmitProduce}
                >
                    自己紹介を変更
                </button>
            </section>
        </>
    );
};

export default Produce;

if (document.getElementById("editProduce")) {
    ReactDOM.render(<Produce />, document.getElementById("editProduce"));
}
