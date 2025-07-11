import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ClientsBar from "./components/ClientsBar";
import CardCarousel from "./components/CardCarousel";
import VisionSection from "./components/VisionSection";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <CardCarousel />
              <VisionSection />
            </>
          } />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
