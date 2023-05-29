import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Validation from "./Validation";

const Produce = () => {
    const element = document.getElementById("editProduce");
    let produce = [];
    produce = JSON.parse(element.dataset.produce);
    // 自己紹介の入力内容
    const [inputProduce, setProduce] = useState(produce);
    // バリデーション成功
    const [sucess, setSucess] = useState();
    const [error, setError] = useState();
    // バリデーションの表示の状態
    const [showProduceVali, setShowProduceVali] = useState(false);
    // 自己紹介の内容を入力した際に更新される
    const onHandleChangeProduce = (e) => {
        setProduce(e.target.value);
        // バリデーションを初期化
        setSucess("");
    };
    // 自己紹介のフォームをクリックしたさいにバリデーションを表示
    const onClickInputProduce = (e) => {
        setShowProduceVali(true);
    };
    // 自己紹介を非同期通信で送信する
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
                    // 子コンポーネントに渡すshowをfalseにしてでサーバサイドのエラーを表示できるようにする。
                    setShowProduceVali(false);
                    if (error.response?.status) {
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
