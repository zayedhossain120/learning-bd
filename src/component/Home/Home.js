import React from "react";
import Banner from "../Banner/Banner";
import Course from "../Course/Course";
import Instructor from "../Instructor/Instructor";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Course></Course>
      <Instructor></Instructor>
      <About></About>
    </div>
  );
};

export default Home;
