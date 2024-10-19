import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ProbStmt from "../../components/ProbStmt/ProbStmt";
import Intro from "../../components/Introduction/Introduction";
import AboutUs from "../../components/AboutUS/AboutUs";

function Home() {
  return (
    <>
      <Header />
      <ProbStmt />
      <Intro/>
      <AboutUs/>
    </>
  );
}

export default Home;
