import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import CheckButton from "./CheckButton";

const Child = () => {
    const element = document.getElementById("child");
    // 子ステップ
    let child;
    // ページを開いた最初のチェック状態
    let is_checked;
    // チェックボタンの表示
    let show;
    // ログインユーザー
    let auth;
    // 投稿者
    let edit;
    // 親ステップ
    let step;

    if (element && element.dataset.child) {
        child = JSON.parse(element.dataset.child);
    }
    if (element && element.dataset.is_checked) {
        is_checked = JSON.parse(element.dataset.is_checked);
    }

    if (element && element.dataset.show) {
        show = JSON.parse(element.dataset.show);
    }

    if (element && element.dataset.step) {
        step = JSON.parse(element.dataset.step);
    }

    if (element && element.dataset.auth) {
        auth = JSON.parse(element.dataset.auth);
        // 投稿者を判別
        if (auth) {
            if (step[0].user_id === auth.id) {
                edit = true;
            }
        }
    }

    return (
        <section className="p-child">
            <p className="p-child__name">{child.name}</p>
            <p className="p-child__content">{child.content}</p>
            <p> 投稿日:{moment(child.updated_at).format("YYYY年MM月DD日")}</p>
            {/* ログインユーザーならチェックボタンを表示(投稿者はチャレンジできないため、表示はされない) */}
            {auth && (
                <CheckButton
                    is_checked={is_checked}
                    endpoint={"/child/" + child.id + "/check"}
                    show={show}
                ></CheckButton>
            )}
            {/* 投稿者なら編集リンクを表示 */}
            {edit && (
                <p className="c-link">
                    <a href={"/child/" + child.id + "/edit"}>編集する</a>
                </p>
            )}
        </section>
    );
};

export default Child;

if (document.getElementById("child")) {
    ReactDOM.render(<Child />, document.getElementById("child"));
}
