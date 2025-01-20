import React, { useState, useEffect } from "react";
import ShopLayout from "../layouts/shopLayout";
import ShopLayoutMobile from "../layouts/shopLayoutMobile";

export default function ProtectLayout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Lắng nghe sự kiện thay đổi kích thước màn hình
    window.addEventListener("resize", handleResize);

    // Dọn dẹp sự kiện khi component bị unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{isMobile ? <ShopLayoutMobile /> : <ShopLayout />}</div>;
}
