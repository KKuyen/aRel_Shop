import React, { useEffect, useState } from "react";
import "./detailContent.css";
import { getACloth } from "../../../../services/admnService";

export default function DetailMainContent({ imageUrls }) {
  const [cloth, setCloth] = useState(null);
  const [layout, setLayout] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCloth = async () => {
      try {
        const response = await getACloth(1);
        const clothData = response.clothes;
        setCloth(clothData);
        setLoading(false);

        // Kiểm tra và gán layout từ dữ liệu API
        if (
          clothData?.layouts?.layouts &&
          clothData.layouts.layouts.length > 0
        ) {
          const layoutString = clothData.layouts.layouts[0].layout;
          setLayout(layoutString.split("").map(Number));
        }
      } catch (error) {
        console.error("Error fetching cloth data:", error);
        setLoading(false);
      }
    };

    fetchCloth();
  }, []);

  const imageUrlsArray = [
    "https://product.hstatic.net/200000201725/product/z5864593973140_ce88cf2b3e23857227699aa007e8a544_3571e570498a4a62ac75186c37fb40c9_master.jpg",
    "https://product.hstatic.net/200000201725/product/z5864593973140_ce88cf2b3e23857227699aa007e8a544_3571e570498a4a62ac75186c37fb40c9_master.jpg",
    "https://product.hstatic.net/200000201725/product/z5864593973140_ce88cf2b3e23857227699aa007e8a544_3571e570498a4a62ac75186c37fb40c9_master.jpg",
    "https://product.hstatic.net/200000201725/product/z5864593973140_ce88cf2b3e23857227699aa007e8a544_3571e570498a4a62ac75186c37fb40c9_master.jpg",
    "https://product.hstatic.net/200000201725/product/z5864593973140_ce88cf2b3e23857227699aa007e8a544_3571e570498a4a62ac75186c37fb40c9_master.jpg",
    "https://product.hstatic.net/200000201725/product/z5864593973140_ce88cf2b3e23857227699aa007e8a544_3571e570498a4a62ac75186c37fb40c9_master.jpg",
  ];

  let imagesToDisplay = [...imageUrlsArray];

  if (loading) return <p>Loading...</p>;

  return (
    <div className="mainContent">
      {layout.map((count, rowIndex) => {
        const gap = 0; // Khoảng cách giữa các ảnh (px)
        const totalGap = (count - 1) * gap; // Tổng khoảng cách giữa các ảnh
        const imageWidth = `calc((100% - 10px*${count - 1} ) / ${count})`; // Tính chiều rộng ảnh

        return (
          <div
            key={rowIndex}
            className="imageRow"
            style={{ display: "flex", gap: `${gap}px` }}
          >
            {imagesToDisplay.splice(0, count).map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Image ${index}`}
                className="imageItem"
                style={{ width: imageWidth }} // Đặt width theo công thức tính
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
