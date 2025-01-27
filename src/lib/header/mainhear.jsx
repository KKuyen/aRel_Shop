import React, { useState, useEffect } from "react";
import "./header.css";
import ShortComponent from "../component/sortComponent";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
export default function MainHeader({ setPage }) {
  const { language, translations } = useLanguage();
  const [selected, setSelected] = useState("MEN"); // State để theo dõi mục được chọn
  const [activeView, setActiveView] = useState(() => {
    const savedView = localStorage.getItem("activeView");
    return savedView ? savedView : "view1"; // Default to "view1" if no saved view
  });

  useEffect(() => {
    localStorage.setItem("activeView", activeView);
  }, [activeView]);
  const [isHovered, setIsHovered] = useState(false); // State để theo dõi trạng thái hover
  const location = useLocation();
  const [isScrolledDown, setIsScrolledDown] = useState(false); // Theo dõi trạng thái cuộn xuống
  const [lastScrollY, setLastScrollY] = useState(0); // Lưu vị trí cuộn trước đó

  const handleClick = (item) => {
    setSelected(item); // Cập nhật mục được chọn
    setPage(item); // Gọi hàm setPage từ props để cập nhật trang
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isHovered) {
        if (window.scrollY > lastScrollY) {
          // Người dùng cuộn xuống
          setIsScrolledDown(true);
        } else {
          // Người dùng cuộn lên
          setIsScrolledDown(false);
        }
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHovered, lastScrollY]);

  const handleViewClick = (view) => {
    setActiveView(view); // Cập nhật view được chọn
  };

  return (
    <div
      className="headerr-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered
          ? "rgba(255, 255, 255, 0.95)"
          : "transparent",
        transition: "background-color 0.3s ease", // Thêm hiệu ứng chuyển màu
      }}
    >
      <div className="row row1">
        <div className="col logoContainer">
          <div className="logo"></div>
          <div
            className={`link ${
              location.pathname === "/shop/men" || location.pathname === "/shop"
                ? "men"
                : ""
            }`}
            onClick={() => handleClick("men")}
          >
            {translations[language].men}
          </div>
          <div
            className={`link ${
              location.pathname === "/shop/women" ? "women" : ""
            }`}
            onClick={() => handleClick("women")}
          >
            {translations[language].women}
          </div>
          <div
            className={`link ${
              location.pathname === "/shop/kids" ? "kids" : ""
            }`}
            onClick={() => handleClick("kids")}
          >
            {translations[language].kids}
          </div>
          <div
            className={`link ${
              location.pathname === "/shop/beauty" ? "beauty" : ""
            }`}
            onClick={() => handleClick("beauty")}
          >
            {translations[language].beauty}
          </div>
        </div>

        <div className="col rightcol">
          <div className="rightcolitem">SIGN IN</div>
          <div className="rightcolitem">HELP</div>
          <div className="rightcolitem">CART(0)</div>
        </div>
      </div>
      <div className={`flex ${isScrolledDown && !isHovered ? "hidden" : ""}`}>
        {/* Existing content of flex */}
        <div
          className={`shortComponent ${
            isScrolledDown && !isHovered ? "hidden" : ""
          }`}
        >
          <ShortComponent text={"BY NEWEST"} />
          <ShortComponent text={"BRAND"} />
          <ShortComponent text={"PRICE"} />
          <ShortComponent text={"COLOR"} />
          <ShortComponent text={"STYLE"} />
        </div>
        <div className="flex2">
          <div
            className="viewcontainer vc"
            onClick={() => handleViewClick("view1")}
          >
            <div
              className={`view1 ${activeView === "view1" ? "active" : ""}`}
              onClick={() => handleViewClick("view1")}
            ></div>
          </div>
          <div
            className="viewcontainer vc"
            onClick={() => handleViewClick("view2")}
          >
            <div
              className="view2-container"
              onClick={() => handleViewClick("view2")}
            >
              <div
                className={`view2 ${activeView === "view2" ? "active" : ""}`}
              ></div>
              <div
                className={`view2 ${activeView === "view2" ? "active" : ""}`}
                onClick={() => handleViewClick("view2")}
              ></div>
            </div>
          </div>
          <div className="vc " onClick={() => handleViewClick("view3")}>
            <div className="view3-container">
              <div
                className={`view3 ${activeView === "view3" ? "active" : ""}`}
              ></div>
              <div
                className={`view3 ${activeView === "view3" ? "active" : ""}`}
                onClick={() => handleViewClick("view3")}
              ></div>
            </div>
            <div className="view3-container">
              <div
                className={`view3 ${activeView === "view3" ? "active" : ""}`}
              ></div>
              <div
                className={`view3 ${activeView === "view3" ? "active" : ""}`}
                onClick={() => handleViewClick("view3")}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
