import React, { useState } from "react";
import "./shopCategory.css";

export default function ShopCategory() {
  const tab = localStorage.getItem("page") || "MEN"; // Đảm bảo có giá trị mặc định nếu không có trong localStorage
  const color = (() => {
    switch (tab) {
      case "men":
        return "#0083EF";
      case "women":
        return "#ee7dcb";
      case "kids":
        return "#40E0D0";
      case "beauty":
        return "#9666FD";
      default:
        return "black";
    }
  })();

  const clothesArray = [
    "COATS & OUTERWEAR",
    "JACKETS",
    "KNITWEAR",
    "SHIRTS & POLO",
    "T-SHIRTS",
    "TROUSERS & JEANS",
    "SHORTS",
    "OTHERS",
  ];
  const footWearsArray = ["SANDALS", "SHOES & BOOTS", "SNEAKERS"];
  const accessoriesArray = [
    "JEWELRY",
    "SCARVES",
    "MASKS",
    "BELTS",
    "HATS",
    "BAGS",
    "WATCHES",
    "GLASSES",
    "SOCKS",
    "GLOVES",
    "PURSES",
    "OTHERS",
  ];

  const [selectedCategory, setSelectedCategory] = useState("CLOTHES(ALL)");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="shop-category">
      <div
        className={`cate ${
          selectedCategory === "CLOTHES(ALL)" ? "selected" : ""
        }`}
        onClick={() => handleCategoryClick("CLOTHES(ALL)")}
      >
        CLOTHES(ALL)
      </div>
      <div className="clothes">
        {clothesArray.map((item, index) => (
          <div
            key={index}
            className={`clothes-item ${
              selectedCategory === item ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <br />
      <br />
      <div
        className={`cate ${
          selectedCategory === "FOOTWEAR(ALL)" ? "selected" : ""
        }`}
        onClick={() => handleCategoryClick("FOOTWEAR(ALL)")}
      >
        FOOTWEAR(ALL)
      </div>
      <div className="clothes">
        {footWearsArray.map((item, index) => (
          <div
            key={index}
            className={`clothes-item ${
              selectedCategory === item ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <br />
      <br />
      <div
        className={`cate ${
          selectedCategory === "ACCESSORIES(ALL)" ? "selected" : ""
        }`}
        onClick={() => handleCategoryClick("ACCESSORIES(ALL)")}
      >
        ACCESSORIES(ALL)
      </div>
      <div className="clothes">
        {accessoriesArray.map((item, index) => (
          <div
            key={index}
            className={`clothes-item ${
              selectedCategory === item ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
