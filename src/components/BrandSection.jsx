import React from "react";
import "./BrandSection.css";

export default function BrandSection() {
  return (
    <section className="brand-section">
      <h2>
        Present Your Brand <br />
        <span className="highlight">Like A Pro</span>
      </h2>
      <div className="brand-bar">
        Deliver The Ultimate Digital Experience To Your Clients
      </div>
      <div className="brand-card">
        <div className="brand-card-left">
          <div className="brand-icon">△</div>
          <div className="brand-icon">Aa</div>
          <div className="brand-icon">▶</div>
        </div>
        <div className="brand-card-main">
          <div className="brand-card-title">
            Stunning <span className="highlight">Ux Design</span> Combined With Interactive Website
          </div>
          <div className="brand-card-image">
            {/* Replace with actual image */}
            <div className="placeholder-person"></div>
          </div>
          <div className="brand-card-gallery">
            {/* Replace with actual images */}
            <div className="gallery-img"></div>
            <div className="gallery-img"></div>
            <div className="gallery-img"></div>
            <div className="gallery-img"></div>
          </div>
        </div>
      </div>
    </section>
  );
}