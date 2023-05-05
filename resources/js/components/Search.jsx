import React, { useState } from "react";
import ReactDOM from "react-dom";

const Search = () => {
    const element = document.getElementById("search");
    var aboveday;
    var belowday;

    if (element && element.dataset.aboveday) {
        aboveday = JSON.parse(element.dataset.aboveday);
        belowday = JSON.parse(element.dataset.belowday);
    }

    return (
        <>
            <span>投稿日検索</span>
            <input
                type="date"
                name="aboveday"
                className="c-input c-input--day"
                defaultValue={aboveday}
            />
            <span>~</span>
            <input
                type="date"
                name="belowday"
                className="c-input c-input--day"
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
