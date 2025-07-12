import React from "react";
import "./styles.css";
import {
  FaGraduationCap,
  FaBookOpen,
  FaChalkboardTeacher,
  FaFileAlt,
} from "react-icons/fa";

const FeatureSection = () => {
  const features = [
    {
      icon: <FaGraduationCap size={40} />,
      title: "CREATIVE LEARNING",
      description:
        "Creative learning is at the heart of our educational approach. We believe in nurturing curiosity and encouraging empirical approach amongst our students by integrating hands-on experiences and collaborative projects along with real-world problem-solving into our curriculum.",
      bgColor: "#3f4a9d",
    },
    {
      icon: <FaBookOpen size={40} />,
      title: "STRONG ALUMNI BASE",
      description:
        "We have a huge strength of Alumni Base across different Industries & Sectors at Global level who support our institution.",
      bgColor: "#5fb6b2",
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "QUALIFIED TEACHERS",
      description:
        "Our institution takes pride in its team of certified teachers who bring both expertise and passion to the classroom. Each educator is professionally trained, holding recognized certifications and staying updated with the latest teaching methodologies.",
      bgColor: "#1ea7e1",
    },
    {
      icon: <FaFileAlt size={40} />,
      title: "EDUCATION FACILITY",
      description: `- Montessori to Degree
- AI Driven Computer Labs
- State of the Art Structured experimental Labs
- Co-Scholastics
- Placements`,
      bgColor: "#313562",
      isList: true,
    },
  ];

  return (
    <div className="feature-section">
      {features.map((feature, index) => (
        <div
          className="feature-card"
          key={index}
          style={{ backgroundColor: feature.bgColor }}
        >
          <div className="icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          {feature.isList ? (
            <ul>
              {feature.description.split("\n").map((line, idx) => (
                <li key={idx}>{line.replace("-", "").trim()}</li>
              ))}
            </ul>
          ) : (
            <p>{feature.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
