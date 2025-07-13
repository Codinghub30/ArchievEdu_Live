import React, { useState, useEffect } from "react";
import "./styles.css";
import img1 from "../../assets/home1.jpg";
import img2 from "../../assets/home2.jpeg";
import img3 from "../../assets/home3.jpeg";
import img4 from "../../assets/home1.jpg";
import img5 from "../../assets/home3.jpeg";
import img6 from "../../assets/home1.jpg";

const sliderImages = [img1, img2, img3];
const galleryImages = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-page">
      <div className="gallery-title-wrapper">
        <h1 className="gallery-title">Gallery</h1>
        <span className="tagline-badge">Explore the Moments That Matter</span>
      </div>

      {/* Slider Section */}
      <div className="slider-container">
        <img
          src={sliderImages[current]}
          alt={`Slide ${current + 1}`}
          className="slider-image"
        />
        <div className="slider-buttons">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="image-grid">
        {galleryImages.map((img, index) => (
          <div className="grid-item" key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
