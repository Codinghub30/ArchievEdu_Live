import React from "react";
import "./styles.css";

const classData = [
  {
    class: "4th",
    subjects: ["English", "Gk", "Mathematics", "Science"],
    bg: "#dcdffc",
    num: "04",
  },
  {
    class: "5th",
    subjects: ["English", "Gk", "Mathematics", "Science"],
    bg: "#fcefdc",
    num: "05",
  },
  {
    class: "6th",
    subjects: ["English", "Gk", "Mathematics", "Science"],
    bg: "#d8edff",
    num: "06",
  },
  {
    class: "7th",
    subjects: ["English", "Gk", "Mathematics", "Science"],
    bg: "#fbe2e2",
    num: "07",
  },
  {
    class: "8th",
    subjects: ["English", "Gk", "Mathematics", "Science"],
    bg: "#d3f4f1",
    num: "08",
  },
  {
    class: "9th",
    subjects: ["English", "Gk", "Mathematics", "Science"],
    bg: "#dcdffc",
    num: "09",
  },
];

const ClassSection = () => {
  return (
    <section className="olympiad-section">
      <h2>
        <span className="blue">Achievoquest </span>
        <span className="orange">Olympiad</span>
      </h2>
      <p className="description">
        The Achievoquest Olympiad is <strong>grade-flexible</strong> and
        designed to identify and nurture student potential. Open to learners
        from <strong>Classes 4 to 9</strong>, it focuses on assessing core
        concepts and fundamental competencies across key subjects.
      </p>

      <div className="class-grid">
        {classData.map((cls, index) => (
          <div
            className="class-card"
            key={index}
            style={{ backgroundColor: cls.bg }}
          >
            <h3>Class {cls.class}</h3>
            <ul>
              {cls.subjects.map((sub, i) => (
                <li key={i}>
                  {i + 1}. {sub}
                </li>
              ))}
              <li className="more">and more...</li>
            </ul>
            <div className="class-badge">
              <span>{cls.num}</span>
              <small>CLASS</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassSection;
