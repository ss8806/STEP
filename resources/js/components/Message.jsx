import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Message = () => {
    const element = document.getElementById("message");
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <>
            <p>サクセスリアクト</p>
        </>
    );
};

export default Message;

if (document.getElementById("message")) {
    ReactDOM.render(<Message />, document.getElementById("message"));
}
