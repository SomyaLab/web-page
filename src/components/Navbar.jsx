import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="logo">Somya Lab</div>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Preview</a>
        </li>
        <li className={location.pathname === "/blog" ? "active" : ""}>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <a href="mailto:Vedu@somya.ai">Contact</a>
        </li>
      </ul>
      <button className="talk-btn">Let's Talk</button>
    </nav>
  );
}
