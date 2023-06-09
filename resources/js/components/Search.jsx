import React, { useState } from "react";
import ReactDOM from "react-dom";

const Search = () => {
    const element = document.getElementById("search");
    // 上限日
    let aboveday;
    // 下限日
    let belowday;
    if (element && element.dataset.aboveday) {
        aboveday = JSON.parse(element.dataset.aboveday);
        belowday = JSON.parse(element.dataset.belowday);
    }

    return (
        <>
            <p className="p-search__title">投稿日検索</p>
            <input
                type="date"
                name="aboveday"
                className="c-input p-search__input"
                defaultValue={aboveday}
            />
            <span className="p-search__wavyline">~</span>
            <input
                type="date"
                name="belowday"
                className="c-input p-search__input"
                defaultValue={belowday}
            />
            <button type="submit" className="c-btn p-search__btn">
                <i className="fas fa-search"></i>
            </button>
        </>
    );
};

export default Search;

if (document.getElementById("search")) {
    ReactDOM.render(<Search />, document.getElementById("search"));
}
