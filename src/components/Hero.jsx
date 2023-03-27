import React from "react";
import "../styles/hero.css";
import Navbar from "./Navbar";
export default function Hero() {
  return (
    <section className="hero-container">
      <Navbar />
      <div className="text-container">
        <div className="inner-cont">
          <h2 id="innercont-h2">Exclusive Deals of Furniture Collection</h2>
          <p id="innercont-p">Explore different categories. Find the best deals</p>
          <button id="innercont-btn">Shop Now</button>
        </div>
      </div>
    </section>
  );
}
