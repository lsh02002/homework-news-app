import React from "react";
import "./NewsContent.css";

export const NewsContent = ({ count, value }) => {
  return (
    <div className="news-box1">
      <h3>{count}번 기사</h3>
      {new Date(value.publishedAt).toLocaleDateString("ko", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })}
      에 업로드 됨
      <div className="news-title">
        <h1>{value.title}</h1>
      </div>
      <div className="news-content">
        <p>{value.content}</p>
      </div>
    </div>
  );
};
