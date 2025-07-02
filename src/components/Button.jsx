import React from "react";
import "./Button.css";

export default function Button({ text, purple }) {
  return (
    <button className={`main-btn${purple ? " purple" : ""}`}>{text}</button>
  );
}