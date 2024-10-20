import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import LiteratureReview from "./components/Literature/Literature";
import Methodology from "./components/Methodology/Methodology";
import Result from "./components/Result/Result";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LiteratureReview" element={<LiteratureReview />} />
          <Route path="/Methodology" element={<Methodology />} />
          <Route path="/Result" element={<Result />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
