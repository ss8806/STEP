import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Search = () => {
    const element = document.getElementById("search");
    var aboveday;
    var belowday;
    var aboveprice;
    var belowprice;

    if (element && element.dataset.aboveday) {
        aboveday = JSON.parse(element.dataset.aboveday);
        belowday = JSON.parse(element.dataset.belowday);
        aboveprice = JSON.parse(element.dataset.aboveprice);
        belowprice = JSON.parse(element.dataset.belowprice);
    }

    let [ad, setAboveday] = useState(aboveday);
    let [ap, setAboveprice] = useState(aboveprice);

    const onHandleChangeAboveprice = (e) => {
        let ab = e.target.value;
        ab = ab.slice(0, 3);
        setAboveprice(ab);
    };

    return (
        <div className="p-serch__group">
            <span>投稿日検索　　</span>
            <span className="u-br" />
            <input
                type="date"
                name="aboveday"
                className="c-input__day"
                defaultValue={ad}
            />
            <span>~</span>
            <input
                type="date"
                name="belowday"
                className="c-input__day"
                defaultValue={belowday}
            />

            <div className="c-serch-group">
                <span>価格検索　　　</span>
                <span className="u-br" />
                <input
                    type="number"
                    name="aboveprice"
                    className="c-input__price"
                    placeholder="価格検索 以上"
                    value={ap}
                    onChange={onHandleChangeAboveprice}
                />

                <span>~</span>
                <input
                    type="number"
                    name="belowprice"
                    className="c-input__price"
                    placeholder="価格検索 以下"
                    defaultValue={belowprice}
                />
            </div>

            <button type="submit" className="c-btn c-btn__serch">
                <i className="fas fa-search"></i>
            </button>
        </div>
    );
};

export default Search;

if (document.getElementById("search")) {
    ReactDOM.render(<Search />, document.getElementById("search"));
}
