import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Stock = () => {
    const element = document.getElementById("stock");
    var stockList = [];

    if (element && element.dataset.stocks) {
        stockList = JSON.parse(element.dataset.stocks);
    }

    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        setStocks(stockList);
    }, []);

    console.log(stocks);

    return (
        <div className="App">
            {stocks.map((stock) => (
                <p key={stock.id}>{stock.name}</p>
            ))}
        </div>
    );
};

export default Stock;

if (document.getElementById("stock")) {
    ReactDOM.render(<Stock />, document.getElementById("stock"));
}
