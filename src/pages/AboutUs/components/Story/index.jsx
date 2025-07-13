import React from "react";
import "./styles.css";
import storyImage from "../../../../assets/home1.jpg";
import globeIcon from "../../../../assets/home1.jpg";
import teamIcon from "../../../../assets/home1.jpg";
import customerIcon from "../../../../assets/home1.jpg";

const Story = () => {
  return (
    <section className="story-wrapper">
      {/* Top Our Story Section */}
      <div className="story-top">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            In 2020, Achievoquest began with one mission: to help learners build
            strong foundations and succeed in Olympiads and beyond. From humble
            beginnings to becoming a trusted name in academic enrichment, we've
            grown through passion, innovation, and a commitment to quality.
          </p>
          <p>
            Our journey is powered by dedicated educators, digital innovation,
            and a focus on real-world skill building. Today, we stand as a
            reliable companion for thousands of students across India.
          </p>
        </div>
        <div className="story-image">
          <img src={storyImage} alt="Founders talking" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="story-stats">
        <h2>Achievoquest By the Numbers</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <img src={globeIcon} alt="Global presence" />
            <h3>25+ Cities</h3>
            <p>Nationwide presence</p>
          </div>
          <div className="stat-card">
            <img src={teamIcon} alt="Team" />
            <h3>100+ Mentors</h3>
            <p>Certified educators</p>
          </div>
          <div className="stat-card">
            <img src={customerIcon} alt="Students" />
            <h3>10,000+ Students</h3>
            <p>Trained through our platform</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
