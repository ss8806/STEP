import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const LikeButton = (props) => {
    let is_liked = props.is_liked;
    // console.log(is_liked);
    let endpoint = props.endpoint;
    // console.log(endpoint);

    let [liked, setLiked] = useState(is_liked);

    useEffect(() => {
        setLiked(is_liked);
    }, []);

    const handleLike = async () => {
        // web.phpよりarticle/{article}/like ルートパラメータに注意
        // awaitでレスポンスを待つ
        await axios.put(endpoint);
        setLiked(!liked);
    };

    const handleUnLike = async () => {
        await axios.delete(endpoint);
        setLiked(!liked);
    };

    const handleClickLike = liked ? handleUnLike : handleLike;

    return (
        <button
            type="button"
            className="c-btn c-btn__like "
            onClick={handleClickLike}
        >
            <div>
                {liked ? (
                    <>
                        <i className="fas fa-heart fa-2x c-btn__fa--red" />
                    </>
                ) : (
                    <>
                        <i className="fas fa-heart fa-2x" />
                    </>
                )}
            </div>
        </button>
    );
};

export default LikeButton;
