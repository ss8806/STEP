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

    // console.log(stocks);

    if (stocks.data !== undefined) {
        var sdata = stocks.data;
        console.log(sdata);
    }

    return (
        <>
            <div className="App">
                {sdata ? (
                    <>
                        {/* {sdata.map((stock, i) => (
                            <ul key={i}>
                                <li>{stock.name}</li>
                            </ul>
                        ))} */}
                        <div className="p-card">
                            <div className="c-flexbox--index">
                                <div className="c-flexbox__flexcontainer c-flexbox__flexcontainer--index">
                                    {sdata.map((stock, i) => (
                                        <ul
                                            key={i}
                                            className="c-flexbox__flexitem c-flexbox__flexitem--index"
                                        >
                                            <li className="p-card p-card__header--index u-overflow">
                                                {stock.name}
                                            </li>
                                            <li className="p-card__body">
                                                <p>投稿日</p> {stock.updated_at}
                                            </li>
                                            <li>{stock.price}円</li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>データを取得できませんでした。</>
                )}
            </div>
        </>
    );
};

export default Stock;

if (document.getElementById("stock")) {
    ReactDOM.render(<Stock />, document.getElementById("stock"));
}
