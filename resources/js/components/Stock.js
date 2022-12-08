import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Stock = () => {
    // 割愛
};

export default Stock;

// bladeファイル内の <div id="stock">に対してこのコンポーネントがレンダリングされる
if (document.getElementById("stock")) {
    ReactDOM.render(<Stock />, document.getElementById("stock"));
}
