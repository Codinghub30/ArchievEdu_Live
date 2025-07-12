import React from "react";
import "./styles.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>User Manual</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CSC Academy Olympiads</h4>
          <ul>
            <li>All Olympiad Exams</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>News & Links</h4>
          <ul>
            <li>CSC Olympiad News</li>
            <li>Press Release</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Information</h4>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt /> 238, Okhla Phase-3, New Delhi - 110020
            </li>
            <li>
              <FaEnvelope /> support[at]cscacademy[dot]org <br />
              Olympiad[at]cscacademy[dot]org
            </li>
            <li>
              <FaPhone /> 14599 for VLEs
            </li>
            <li>
              <FaPhoneAlt /> 011-49754923/24 for non VLE
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 | All rights reserved by CSC Academy</p>
      </div>
    </footer>
  );
};

export default Footer;
