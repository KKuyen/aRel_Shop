// filepath: /d:/Projects/aRel/my-app/src/lib/footer/footer.jsx
import React from "react";
import "./footer.css";
import { useLanguage } from "../../LanguageContext";

export default function Footer() {
  const { changeLanguage } = useLanguage();

  return (
    <div className="footer">
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("vi")}>Tiếng Việt</button>
    </div>
  );
}
