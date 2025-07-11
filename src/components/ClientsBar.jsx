import React from "react";
import "./ClientsBar.css";

export default function ClientsBar() {
  return (
    <div className="clients-bar">
      <div className="worked-on" style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#555", alignItems: "center", marginBottom: "40px", }}>
      Grateful to the open-source community <br />
       — thank you for empowering and inspiring everything we build.
      </div>
    </div>
  );
}
