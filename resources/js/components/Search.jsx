import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Search = () => {
    const element = document.getElementById("search");
    var aboveday;
    var belowday;

    if (element && element.dataset.aboveday) {
        aboveday = JSON.parse(element.dataset.aboveday);
        belowday = JSON.parse(element.dataset.belowday);
    }

    const onHandleChangeAboveprice = (e) => {
        let tv = e.target.value;
        tv = tv.slice(0, 3);
        setAboveprice(tv);
        // if (ap > bp) {
        //     console.log("価格エラー");
        // }
    };

    const onHandleChangeBelowprice = (e) => {
        let tv = e.target.value;
        tv = tv.slice(0, 3);
        setBelowprice(tv);
    };

    const onHandleBlurBelowprice = (e) => {
        if (ap > bp) {
            console.log("価格エラー");
        }
    };

    return (
        <div className="p-serch__group">
            <span>投稿日検索　　</span>
            <span className="u-br" />
            <input
                type="date"
                name="aboveday"
                className="c-input__day"
                defaultValue={aboveday}
            />
            <span>~</span>
            <input
                type="date"
                name="belowday"
                className="c-input__day"
                defaultValue={belowday}
            />

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
