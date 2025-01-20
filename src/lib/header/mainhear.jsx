import React, { useState } from "react";
import "./header.css";

export default function MainHeader() {
  const [selected, setSelected] = useState(""); // State để theo dõi mục được chọn

  const handleClick = (item) => {
    setSelected(item); // Cập nhật mục được chọn
  };

  return (
    <div>
      <div className="row row1">
        <div className="col-6 logoContainer max">
          <div className="logo"></div>
          <div
            className={`link ${selected === "MEN" ? "selected men" : ""}`}
            onClick={() => handleClick("MEN")}
          >
            MEN
          </div>
          <div
            className={`link ${selected === "WOMEN" ? "selected women" : ""}`}
            onClick={() => handleClick("WOMEN")}
          >
            WOMEN
          </div>
          <div
            className={`link ${selected === "KIDS" ? "selected kids" : ""}`}
            onClick={() => handleClick("KIDS")}
          >
            KIDS
          </div>
          <div
            className={`link ${selected === "BEAUTY" ? "selected beauty" : ""}`}
            onClick={() => handleClick("BEAUTY")}
          >
            BEAUTY
          </div>
        </div>

        <div className="col-6 max">Part 4</div>
      </div>
    </div>
  );
}
