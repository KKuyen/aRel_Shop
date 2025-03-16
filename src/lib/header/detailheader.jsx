import React, { useState, useEffect } from "react";
import "./header.css";
import ShortComponent from "../component/sortComponent";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
export default function MainHeader({}) {
  const { language, translations } = useLanguage();
  const [selected, setSelected] = useState("men"); // State để theo dõi mục được chọn
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
    window.location.href = "/shop/" + item;
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
            onClick={() => handleClick(selected)}
          >
            {translations[language][selected]}
          </div>
        </div>

        <div className="col rightcol">
          <div className="rightcolitem">SIGN IN</div>
          <div className="rightcolitem">HELP</div>
          <div className="rightcolitem">CART(0)</div>
        </div>
      </div>
    </div>
  );
}
