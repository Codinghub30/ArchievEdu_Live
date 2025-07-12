import React from "react";
// import videoThumbnail from "../../assets/home1.jpg";
import img1 from "../../../../assets/home1.jpg";
import img2 from "../../../../assets/home3.jpeg";
import img3 from "../../../../assets/home2.jpeg";
import excellence60 from "../../../../assets/home1.jpg";
import "./styles.css";

const DetailSection = () => {
  return (
    <section className="detail-section">
      {/* LEFT TEXT AREA */}
      <div className="detail-left">
        <img src={excellence60} alt="60 Years" className="detail-badge" />
        <h2>At Vijaya Group of Institutions</h2>
        <div className="divider"></div>
        <p>
          Vijaya Group of Institutions is an <strong>Independent unit</strong>{" "}
          and operates as a singular, focused entity, ensuring a personalized
          and unified approach to education having diverse range of programs
          from Kindergarten to Degree courses under one roof on a{" "}
          <strong>Single Campus</strong>.
        </p>
        <p>
          Vijaya Group of Institutions runs under the Trust -{" "}
          <strong>Vijaya Education Institute Trust</strong>, which does not
          merge with any other groups of institutions or by the name.
        </p>
        <p>
          Vijaya Group of Institutions stands as a unique educational landmark
          in the heart of Bengaluru, with a legacy spanning over 70 years.
          Founded by the visionary K.S. Chandrashekaraiah, the institution has
          grown into a distinguished name in the education sector.
        </p>
        <button className="detail-button">Know More →</button>
      </div>

      {/* RIGHT MEDIA AREA */}
      <div className="detail-right">
        <div className="video-embed">
          <iframe
            src="https://www.youtube.com/embed/some-video-id"
            title="President speech"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="image-grid">
          <img src={img1} alt="Kids" />
          <img src={img2} alt="Group" />
          <img src={img3} alt="Staff" />
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
