import React from "react";
import "./styles.css";
import teamImage from "../../assets/home1.jpg";
import missionImage from "../../assets/home1.jpg";
import badgeIcon from "../../assets/home1.jpg";
import globeIcon from "../../assets/home1.jpg";
import brainIcon from "../../assets/home1.jpg";
import Story from "./components/Story";

const AboutUs = () => {
  return (
    <section className="about-container">
      {/* Top Section */}
      <div className="about-header">
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Achievoquest’s company and culture are a lot like our
            mission—crafted, not cobbled, for a delightful, impactful
            experience.
          </p>
        </div>
        <div className="about-image">
          <img src={teamImage} alt="Our Team" />
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-mission">
        <div className="mission-image">
          <img src={missionImage} alt="Grow Better" />
        </div>
        <div className="mission-text">
          <h2>Our Mission: Helping Millions of Learners Grow Smarter</h2>
          <p>
            At Achievoquest, we don’t just focus on growing bigger—we focus on
            growing smarter. Empowering students through strategic learning
            experiences means aligning academic success with long-term
            achievement. That’s what drives us every day.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2 className="team-heading">Meet Our Instructors</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/assets/team1.jpg" alt="Instructor 1" />
            <h4>Dr. Aarti Sharma</h4>
            <p>Lead Math Instructor</p>
          </div>
          <div className="team-card">
            <img src="/assets/team2.jpg" alt="Instructor 2" />
            <h4>Mr. Rohan Mehta</h4>
            <p>Science Educator</p>
          </div>
          <div className="team-card">
            <img src="/assets/team3.jpg" alt="Instructor 3" />
            <h4>Ms. Priya Desai</h4>
            <p>English Mentor</p>
          </div>
          <div className="team-card">
            <img src="/assets/team4.jpg" alt="Instructor 4" />
            <h4>Mr. Sameer Khan</h4>
            <p>Olympiad Coach</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <h2>Why Choose Achievoquest?</h2>
        <div className="why-choose-grid">
          <div className="why-card">
            <img src={badgeIcon} alt="Certified" />
            <h4>Certified Curriculum</h4>
            <p>Our programs are structured, validated, and result-driven.</p>
          </div>
          <div className="why-card">
            <img src={brainIcon} alt="Expert Mentors" />
            <h4>Expert Mentors</h4>
            <p>Guided by educators who’ve cracked top Olympiads & exams.</p>
          </div>
          <div className="why-card">
            <img src={globeIcon} alt="Global Mindset" />
            <h4>Global Mindset</h4>
            <p>
              Preparing students for both national & international platforms.
            </p>
          </div>
        </div>
      </div>
      <Story />
    </section>
  );
};

export default AboutUs;
