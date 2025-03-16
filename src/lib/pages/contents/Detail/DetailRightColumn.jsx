import React from "react";
import "./detailContent.css";
import Sizes from "../../../component/sizes/Sizes";
import { FaBookmark } from "react-icons/fa";
export default function DetailRightColumn() {
  const colorArray = ["#C0CEDB", "#232323"];
  return (
    <div>
      <div className="rightCon">
        <div className="flexx">
          <div className="namee">"D-SIMPLY-OVER-S" Oversize Denim Shirt"</div>{" "}
          <FaBookmark className="icon" />
        </div>
        <div className="tien">
          {" "}
          <div>20.000.000 đ</div>
        </div>

        <div className="mota">
          Relaxed fit collared shirt made of technical fabric. Featuring short
          sleeves. Chest patch pockets. Adjustable hem with elasticated sides.
          Button-up front.
        </div>
        <div className="xamnhat chunho fontsize15">
          SHIPPING, EXCHANGES AND RETURNING
        </div>
      </div>
      <div className="rightCon rightCon2">
        <div>Color : Kaki | #C0CEDB</div>
        <div className="flexbox">
          {colorArray.map((color, index) => (
            <div
              key={index}
              className="colorbox"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        <div className="nflex">
          <Sizes className="sizes" size="S" status="SAME PRODUCT" />{" "}
          <Sizes className="sizes" size="M" />
        </div>
        <div className="nflex">
          <Sizes className="sizes" size="L" />{" "}
          <Sizes className="sizes" size="XL" />
        </div>
        <br />
        <div className="xamnhat  fontsize15">
          We help you choose the right size
        </div>
        <div className="fontsize15 underline rcm">SIZE RECOMMENDER</div>
        <div className="topmargin10 fontsize15 ">PRODUCT MEASUREMENTS</div>
      </div>
      <div className="Con3">ADD</div>
    </div>
  );
}
