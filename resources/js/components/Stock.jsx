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
        <div className="App">
            {sdata ? (
                <>
                    {sdata.map((stock, i) => (
                        <ul key={i}>
                            <li>{stock.name}</li>
                        </ul>
                    ))}
                </>
            ) : (
                <>取得できませんでした。</>
            )}
        </div>
        // <div className="p-card">
        //     <div className="c-flexbox--index">
        //         <div className="c-flexbox__flexcontainer c-flexbox__flexcontainer--index">
        //             {stocks.map((stock) => (
        //                 <div className="c-flexbox__flexitem c-flexbox__flexitem--index">
        //                     <div className="p-card p-card__header--index u-overflow">
        //                         {stock.name}
        //                     </div>
        //                     <div className="p-card__body">
        //                         <table className="p-table p-table--index u-border__none--top">
        //                             <td>
        //                                 <p>投稿日</p> {stock.updated_at}
        //                             </td>
        //                         </table>
        //                         <table className="p-table p-table--index u-border__none--top">
        //                             <td>{stock.price}円</td>
        //                         </table>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    );
};

export default Stock;

if (document.getElementById("stock")) {
    ReactDOM.render(<Stock />, document.getElementById("stock"));
}
