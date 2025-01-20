import React, { useState, useEffect } from "react";
import Maniheader from "../../header/mainhear";
import Mainheader2 from "../../header/mainhearder2";

const ShopLayout = () => {
  const [isZoomed, setIsZoomed] = useState(window.devicePixelRatio > 3);

  useEffect(() => {
    const handleResize = () => {
      setIsZoomed(window.devicePixelRatio > 3);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isZoomed ? <Mainheader2 /> : <Maniheader />}</div>;
};

export default ShopLayout;
