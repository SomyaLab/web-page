import React, { useState } from "react";
import "./CardCarousel.css";
import asr from "../assets/ASR.png";
import tts from "../assets/tts.png";
import ocr from "../assets/ocr.png";
import mt from "../assets/mt.png";
const cards = [
  {
    image: asr,
    desc: "Our ASR models, including IndicWav2Vec and IndicWhisper, are developed using diverse, multilingual datasets like Kathbath, Shrutilipi, and IndicVoices to ensure accurate speech recognition across many Indian languages."
  },
  {
    image: tts,
    desc: "With projects like AI4BTTS, our TTS work aims to generate natural, expressive synthetic voices in Indian languages. This is achieved through a blend of crawled audio resources and high-quality datasets such as Rasa."
  },
  {
    image: ocr,
    desc: "We are actively developing OCR technologies and datasets—focusing on Document Layout Parsing and script-specific recognition—to support India’s wide variety of writing systems."
  },
  {
    image: mt,
    desc: "Our machine translation systems—such as IndicTransv2—are trained on extensive datasets, combining web-mined content and meticulously curated human translations. These models support all 22 official Indian languages and rival leading commercial alternatives across standard evaluation benchmarks."
  }
];

export default function CardCarousel() {
  const [active, setActive] = useState(0);

  const prevCard = () => setActive((active - 1 + cards.length) % cards.length);
  const nextCard = () => setActive((active + 1) % cards.length);

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">Our Solutions</h2>
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={prevCard}>&lt;</button>
        <div className="carousel-3d">
          {cards.map((card, idx) => {
            let className = "carousel-card";
            if (idx === active) className += " active";
            else if (idx === (active - 1 + cards.length) % cards.length) className += " left";
            else if (idx === (active + 1) % cards.length) className += " right";
            else className += " back";
            return (
              <div className={className} key={idx}>
                <img src={card.image} alt="carousel" />
                <p>{card.desc}</p>
              </div>
            );
          })}
        </div>
        <button className="carousel-btn right" onClick={nextCard}>&gt;</button>
      </div>
    </section>
  );
} 