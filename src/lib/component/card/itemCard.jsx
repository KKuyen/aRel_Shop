import React, { useState } from "react";
import "./itemCard.css";
import "../../color.css";

export default function ItemCard() {
  const [name, setName] = useState("ÁO ĐEN ÔM DÁNG NAM CỠ NHỎ");
  const [price, setPrice] = useState(10000);
  const [discount, setDiscount] = useState(0);
  const [image1, setImage1] = useState(
    "https://marksandspencer.com.ph/cdn/shop/products/asset1_cxnmarksandspencer_com-SD_03_T28_1995M_Y0_X_EC_1.jpg?v=1652945193"
  );
  const [image2, setImage2] = useState(
    "https://i.ebayimg.com/images/g/2gQAAOSwMTRmlYrT/s-l1600.webp"
  );
  const [currentImage, setCurrentImage] = useState(image1);

  const handleMouseEnter = () => {
    setCurrentImage(image2);
  };

  const handleMouseLeave = () => {
    setCurrentImage(image1);
  };

  const sizeArray = ["M", "L", "XL", "XXL"];
  const colors = ["#FF4343"];
  const numberOfColor = 5;

  return (
    <div
      className="item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="item-image-con">
        <img className="item-image img2" src={image2} alt="Item"></img>
        <img className="item-image img1" src={image1} alt="Item"></img>
      </div>

      <div className="item-infor">
        <div className="name xamdam ">{name}</div>
        <div className="price_con">
          <div
            className="origin-price xam dam"
            style={{
              color: discount > 0 ? "#8C8A8A" : "#424141",
              textDecoration: discount > 0 ? "line-through" : "none",
            }}
          >
            {price} $
          </div>
          {discount > 0 && (
            <div className="discount xamdam Roboto_mono16">
              -{discount * 100}%++ {price - price * discount} $
            </div>
          )}
        </div>
        <div className="r3">
          <div className="sizes">
            {sizeArray.map((size, index) => (
              <div key={index} className="size">
                {size}
              </div>
            ))}
          </div>
          <div className="color">
            +{numberOfColor}
            <div className="cldp" style={{ backgroundColor: colors[0] }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
