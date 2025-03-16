import React from "react";
import Maniheader from "../../header/detailheader";
import "./detail.css";
import DetailLeftColumn from "../../pages/contents/Detail/DetailLeftColumn";
import DetailMain from "../../pages/contents/Detail/DetailMainContent";
import DetailRightColumn from "../contents/Detail/DetailRightColumn";
import DetailRecommend from "../contents/Detail/DetailRecommend";
import Footer from "../../footer/footer";
export default function ItemDetailLayout() {
  return (
    <div
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      className="detailall"
    >
      <Maniheader className="headerr" />
      <div className="detail">
        <div className="leftColumn">
          <DetailLeftColumn />
        </div>
        <div className="main">
          <DetailMain />
        </div>
        <div className="right">
          <DetailRightColumn />
        </div>
      </div>

      <br />
      <DetailRecommend></DetailRecommend>

      <Footer></Footer>
    </div>
  );
}
