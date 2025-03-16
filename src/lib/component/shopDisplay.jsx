import React, { useState } from "react";
import "./shopDisplay.css";
import ItemCard from "./card/itemCard";
import { Pagination, ConfigProvider } from "antd";
export default function ShopDisplay() {
  const itemsPerPage = 52;
  const totalItems = 200;
  const [currentPage, setCurrentPage] = useState(1);

  const itemCards = Array.from({ length: totalItems }, (_, index) => (
    <ItemCard key={index} height="42vh" />
  ));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = itemCards.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#424141",
          borderRadius: 0,
        },
      }}
    >
      <div className="display-contain">
        <div className="shop-displayy">{currentItems}</div>
        <br />
        <br />
        <br />
        <Pagination
          align="center"
          current={currentPage}
          total={totalItems}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
        <br />
        <br />
        <br />
      </div>
    </ConfigProvider>
  );
}
