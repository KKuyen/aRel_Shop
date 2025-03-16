import { useState } from "react";
import React from "react";
import "./detailContent.css";

export default function DetailLeftColumn() {
  const [id, setId] = useState(1);
  const [name, setName] = useState("DIESEL “2001 D-MACRO-S” JACKET");
  const itemArray = [
    "DIESEL “2001 D-MACRO-S” WIDEJEAN",
    "DIESEL “2001 D-MACRO-S” T-SHIRT",
  ];

  const [isOpen, setIsOpen] = useState({
    model: false,
    composite: false,
    care: false,
    origin: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div>
      {" "}
      <div className="leftColumn">
        <div className="con">
          <div className="model" onClick={() => toggleSection("model")}>
            <div className="xamdam">MODEL</div>
            <div className="tru2">
              <div className={`tru ${isOpen.model ? "open" : ""}`}> </div>
            </div>
          </div>
          <div className={`hidden-content ${isOpen.model ? "open" : ""}`}>
            <br />
            <div className="tag xamdam">MODEL WEARING</div>
            <div className="mainitem xamdam ">{name}*</div>
            {itemArray.map((item, index) => (
              <div key={index} className="subitem xamdam">
                {item}
              </div>
            ))}
            <br />
            <div className="tag xamdam">MODEL INFORMATION</div>
            <div className="xamdam modelInfo tag">
              <div>Height</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Weight</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Weight</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Weight</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Weight</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Weight</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Weight</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Weight</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Weight</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Weight</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Weight</div>
              <div>170 cm</div>
            </div>

            <div className="xamdam modelInfo tag">
              <div>Weight</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Weight</div>
              <div>170 cm</div>
            </div>

            <div className="xamdam modelInfo tag">
              <div>Breast</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Hips</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Waist</div>
              <div>170 cm</div>
            </div>
            <div className="xamdam modelInfo tag">
              <div>Size on the model</div>
              <div>L</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="con">
          <div className="model" onClick={() => toggleSection("composite")}>
            <div className="xamdam">COMPOSITE</div>
            <div className="tru2">
              <div className={`tru ${isOpen.composite ? "open" : ""}`}> </div>
            </div>
          </div>
          <div className={`hidden-content ${isOpen.composite ? "open" : ""}`}>
            <br />
            <div className="tag xamdam"> 63% lyocell</div>
          </div>
        </div>
        <br />
        <br />
        <div className="con">
          <div className="model" onClick={() => toggleSection("care")}>
            <div className="xamdam">CARE</div>
            <div className="tru2">
              <div className={`tru ${isOpen.care ? "open" : ""}`}> </div>
            </div>
          </div>
          <div className={`hidden-content ${isOpen.care ? "open" : ""}`}>
            <br />
            {/* Add care details here */}
          </div>
        </div>
        <br />
        <br />
        <div className="con">
          <div className="model" onClick={() => toggleSection("origin")}>
            <div className="xamdam">ORIGIN</div>
            <div className="tru2">
              <div className={`tru ${isOpen.origin ? "open" : ""}`}> </div>
            </div>
          </div>
          <div className={`hidden-content ${isOpen.origin ? "open" : ""}`}>
            <br />
            {/* Add origin details here */}
          </div>

          <br />
          <br />
        </div>{" "}
      </div>
      <div className="xamdam tag minimize">Minimize all</div>
    </div>
  );
}
