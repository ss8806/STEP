import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Search = () => {
    const element = document.getElementById("search");
    var searchList = [];

    if (element && element.dataset.searchs) {
        searchList = JSON.parse(element.dataset.searchs);
    }

    const [searchs, setsearchs] = useState([]);

    useEffect(() => {
        setsearchs(searchList);
    }, []);

    // console.log(searchs);

    return (
        <div className="App">
            {searchs.map((search) => (
                <p key={search.id}>{search.name}</p>
            ))}
        </div>
    );
};

export default search;

if (document.getElementById("search")) {
    ReactDOM.render(<Search />, document.getElementById("search"));
}
