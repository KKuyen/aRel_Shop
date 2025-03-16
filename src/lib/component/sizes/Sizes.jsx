import React from "react";
import "./Sizes.css";

export default function Sizes({ size, status }) {
  return (
    <div className={`sizee ${status === null ? "margin-top" : ""}`}>
      <div className={`sizetxt ${status === null ? "margin-top" : ""}`}>
        {size}
      </div>
    </div>
  );
}
