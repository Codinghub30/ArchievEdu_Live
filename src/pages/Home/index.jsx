import React, { useEffect, useState } from "react";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpeg";
import home3 from "../../assets/home3.jpeg";
import "./styles.css";
import FeatureSection from "./components/FeaturedSection";
import DetailSection from "./components/DetailSection";
import ClassSection from "./components/ClassSection";
import Benefits from "./components/Benefits";

const images = [home1, home2, home3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div>
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="hero-overlay"></div>

        {/* Arrow Buttons */}
        <button className="arrow-button left" onClick={goToPrev}>
          &#8592;
        </button>
        <button className="arrow-button right" onClick={goToNext}>
          &#8594;
        </button>

        {/* Content */}
        <div className="hero-content">
          <h3>A LEGACY OF EXCELLENCE</h3>
          <h1>Vijaya Group of Institutions</h1>
          <p>
            A One Stop Academic Land for Learning – Montessori to Graduation
          </p>
          <button className="read-more-btn">READ MORE →</button>
        </div>
      </section>
      <FeatureSection />
      <DetailSection />
      <ClassSection />
      <Benefits />
    </div>
  );
};

export default Home;
