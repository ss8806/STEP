import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Produce = () => {
    const element = document.getElementById("editProduce");
    var produce = [];
    produce = JSON.parse(element.dataset.produce);

    const [Produce, setProduce] = useState(produce);
    const [sucess, setSucess] = useState();
    const [error, setError] = useState();

    const onHandleChangeProduce = (e) => {
        setProduce(e.target.value);
    };

    const handleSubmitProduce = () => {
        axios
            // データはjson形式で渡してControllerで処理
            .put("/editProduce", { editProduce: Produce })
            .then((response) => {
                setSucess("更新しました");
                setError("");
            })
            .catch((error) => {
                {
                    // 失敗時の処理
                    switch (error.response?.status) {
                        case 401:
                            setError("更新できませんでした");
                        case 403:
                            setError("更新できませんでした");
                        case 500:
                            setError("更新できませんでした");
                        default:
                            console.log(error.response.data);
                            setSucess("");
                            setError(error.response.data.errors.editProduce);
                    }
                }
            });
    };

    return (
        <>
            <section className="">
                <p>
                    <label htmlFor="inputproduce">自己紹介</label>
                </p>
                <input
                    id="inputproduce"
                    type="produce"
                    name="editProduce"
                    className="c-input__name"
                    placeholder="ユーザーネーム"
                    defaultValue={Produce}
                    required
                    onChange={onHandleChangeProduce}
                />
                <div className="c-sucess"> {sucess}</div>
                <div className="c-error"> {error}</div>
                <button
                    className="c-btn c-btn__edit"
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
