import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ paddingTop: "5rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
