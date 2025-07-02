import React from "react";
import Button from "./Button";
import indiaLanguages from "../assets/namaste-map.png"; // adjust path as needed
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="sanskrit-heading">
          विविधता ऐक्यं भवति<br/>
          <span style={{ fontSize: "1rem", color: "#555" }} className="highlight">(Diversity is Unity)</span>
        </h1>
        <p className="hero-desc">
        Where tradition meets innovation—Somya builds intelligent solutions that bridge India’s linguistic diversity, enabling seamless, inclusive communication in every tongue.
        </p>
        <Button text="Get Started" />
        <div className="worked-on">
          <span> </span>
        </div>
      </div>
      <div className="hero-illustration">
        <img src={indiaLanguages} alt="India Languages Map" className="hero-image" />
      </div>
    </section>
  );
}
