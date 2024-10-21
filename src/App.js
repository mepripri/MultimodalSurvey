import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Taxonomy from "./components/Taxonomy/Taxonomy";
import Methodology from "./components/Methodology/Methodology";
import KeyFindings from "./components/KeyFindings/KeyFindings";
import AboutUs from "./components/AboutUS/AboutUs";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Taxonomy" element={<Taxonomy />} />
          <Route path="/Methodology" element={<Methodology />} />
          <Route path="/KeyFindings" element={<KeyFindings />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
