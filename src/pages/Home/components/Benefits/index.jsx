import React from "react";
import "./styles.css";
import benefitImg from "../../../../assets/home1.jpg"; // Replace with your image

const benefits = [
  {
    number: "01",
    title: "Strengthening Conceptual Understanding",
    description:
      "At Achievoquest, we move beyond rote learning by encouraging students to master core concepts—critical for academic excellence and competitive exams.",
  },
  {
    number: "02",
    title: "Comprehensive Online Practice",
    description:
      "Achievoquest offers full-length mock tests, chapter-wise quizzes, and structured practice tools to help students build confidence and deepen their understanding.",
  },
  {
    number: "03",
    title: "Digital Literacy & Exam Readiness",
    description:
      "Through our tech-enabled assessments, students at Achievoquest develop essential digital skills while gaining experience with online formats, time management, and strategic test-taking.",
  },
];

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-left">
        <h2>
          Benefits of Participating in the{" "}
          <span className="blue">Achievoquest</span>
        </h2>
        <p className="benefits-description">
          The Achievoquest is more than just a test—it’s a gateway to deeper
          learning, digital readiness, and academic growth. Designed to spark
          curiosity and build strong foundations, it prepares students for the
          challenges of tomorrow.
        </p>

        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <div className="benefit-number">{benefit.number}</div>
            <div className="benefit-text">
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="benefits-right">
        <img src={benefitImg} alt="CSC Winners" />
      </div>
    </section>
  );
};

export default Benefits;
