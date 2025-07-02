import React from "react";
import "./ClientsBar.css";

export default function ClientsBar() {
  return (
    <div className="clients-bar">
      <div className="worked-on" style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#555", alignItems: "center", marginBottom: "40px", }}>Thanks to </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="H&M" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Levis-logo.png" alt="Levi's" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/MG_Motor_UK_logo.png" alt="MG" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Codecademy_logo.png" alt="Codecademy" />
    </div>
  );
}
