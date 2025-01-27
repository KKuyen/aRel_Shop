import "./App.css";

import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ShopLayout from "./lib/pages/layouts/shopLayout";
import ShopLayoutMobile from "./lib/pages/layouts/shopLayoutMobile";
import { useLocation } from "react-router-dom";

function App() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 700 || window.devicePixelRatio > 2.0
  );
  const [selectedview, setSelectedView] = useState("view1");
  const changePage2 = (view) => {
    setSelectedView(view);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700 || window.devicePixelRatio > 2.9);
    };

    // Listen to window resize and zoom events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add return statement here
  return (
    <Routes>
      <Route
        path="/shop/*"
        element={
          isMobile ? (
            <ShopLayoutMobile />
          ) : (
            <ShopLayout setPage2={changePage2} />
          )
        }
      />
    </Routes>
  );
}

export default App;
