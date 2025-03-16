import React from "react";
import "./detailContent.css";
import ItemCard from "../../../component/card/itemCard";
export default function DetailRecommend() {
  return (
    <div className="detail-recommend">
      <div className="xamdam text">YOU MAY ALSO LIKE :</div>
      <br />

      <div className="likedisplay">
        {" "}
        <ItemCard height="30vh"></ItemCard>
        <ItemCard height="30vh"></ItemCard>
        <ItemCard height="30vh"></ItemCard>
        <ItemCard height="30vh"></ItemCard>
        <ItemCard height="30vh"></ItemCard>
        <ItemCard height="30vh"></ItemCard>
        <ItemCard height="30vh"></ItemCard>
      </div>
      <div className="likedisplay">
        {" "}
        <ItemCard height="30vh"></ItemCard>
        <ItemCard height="30vh"></ItemCard>
        <ItemCard height="30vh"></ItemCard>
        <ItemCard height="30vh"></ItemCard>
        <ItemCard height="30vh"></ItemCard>
        <ItemCard height="30vh"></ItemCard>
        <ItemCard height="30vh"></ItemCard>
      </div>
    </div>
  );
}
