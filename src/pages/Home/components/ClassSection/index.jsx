import React from "react";
import "./styles.css";

const classData = [
  {
    class: "3rd",
    subjects: ["English", "Hindi", "Mathematics", "Science"],
    bg: "#d3f4f1",
    num: "03",
  },
  {
    class: "4th",
    subjects: ["English", "Hindi", "Mathematics", "Science"],
    bg: "#dcdffc",
    num: "04",
  },
  {
    class: "5th",
    subjects: ["English", "Hindi", "Mathematics", "Science"],
    bg: "#fcefdc",
    num: "05",
  },
  {
    class: "6th",
    subjects: ["English", "Hindi", "Mathematics", "Science"],
    bg: "#d8edff",
    num: "06",
  },
  {
    class: "7th",
    subjects: ["English", "Hindi", "Mathematics", "Science"],
    bg: "#fbe2e2",
    num: "07",
  },
  {
    class: "8th",
    subjects: ["English", "Hindi", "Mathematics", "Science"],
    bg: "#d3f4f1",
    num: "08",
  },
  {
    class: "9th",
    subjects: ["English", "Hindi", "Mathematics", "Science"],
    bg: "#dcdffc",
    num: "09",
  },
  {
    class: "10th",
    subjects: ["English", "Hindi", "Mathematics", "Science"],
    bg: "#fcefdc",
    num: "10",
  },
  {
    class: "11th",
    subjects: ["English", "Hindi", "Mathematics", "Physics"],
    bg: "#dcdffc",
    num: "11",
  },
  {
    class: "12th",
    subjects: ["English", "Hindi", "Mathematics", "Physics"],
    bg: "#d8edff",
    num: "12",
  },
];

const ClassSection = () => {
  return (
    <section className="olympiad-section">
      <h2>
        <span className="blue">CSC Academy </span>
        <span className="orange">Olympiad</span>
      </h2>
      <p className="description">
        The CSC Olympiad is <strong>grade-flexible</strong> and designed to
        identify and nurture student potential. Open to learners from{" "}
        <strong>Classes 3 to 12</strong>, it focuses on assessing core concepts
        and fundamental competencies across key subjects.
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
