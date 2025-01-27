import React, { useEffect } from "react";
import "./ShopConetent.css";
import ShopCategory from "../../component/shopCategory";
import ShopDisplay from "../../component/shopDisplay";
const ShopContent = ({ type }) => {
  return (
    <div className="shop-content">
      <ShopCategory className="shop-category" />
      <ShopDisplay className="shop-display" />
    </div>
  );
};

export default ShopContent;
