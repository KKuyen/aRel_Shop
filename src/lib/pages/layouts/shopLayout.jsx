import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Maniheader from "../../header/mainhear";
import Mainheader2 from "../../header/mainhearder2";
import ShopContent from "../contents/ShopContent";
import Footer from "../../footer/footer";

import "./shopLayout.css";
const ShopLayout = ({ setPage2 }) => {
  const location = useLocation();

  const navigate = useNavigate();
  const [selected, setSelected] = useState("men");

  useEffect(() => {
    localStorage.setItem("page", "men");
  }, []);

  const changePage = (page) => {
    setSelected(page);
    navigate(`/shop/${page.toLowerCase()}`); // Navigate to lowercase routes
    localStorage.setItem("page", page);
  };
  const [selectedview, setSelectedView] = useState("view1");
  const changePage2 = (view) => {
    setSelectedView(view);
  };

  return (
    <>
      {/* Header */}
      <div>
        <Maniheader
          setPage={changePage}
          setPage2={changePage2}
          view={selectedview}
          className="headerr"
        />
      </div>

      {/* Routes */}
      <div className="content-container">
        <Routes>
          <Route path="/men" element={<ShopContent type="men" />} />
          <Route path="/women" element={<ShopContent type="women" />} />
          <Route path="/kids" element={<ShopContent type="kids" />} />
          <Route path="/beauty" element={<ShopContent type="beauty" />} />
          <Route path="/" element={<ShopContent type="men" />} />{" "}
          {/* Default route */}
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ShopLayout;
