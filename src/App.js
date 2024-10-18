import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"; // Import Footer component
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        {/* Your main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="MultimodalSurvey/" element={<Home />} />
        </Routes>
        {/* Footer is added here */}
        <Footer />
      </div>
    </>
  );
}

export default App;
