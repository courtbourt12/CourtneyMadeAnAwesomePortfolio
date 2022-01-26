import React from "react";
import AppNavbar from "../components/navbar";
import Hobbies from "../components/Hobbies";
import Education from "../components/Education";
import Personality from "../components/Personality";
import "../styling/About.css";
import glitterBackground from '../assets/Photos/glitterBackground.jpg'

function About() {
  
  return (
    <div className= "backgroundAbout" style={{
      backgroundImage: `url(${glitterBackground})`,
      backgroundRepeat: "repeat-y"
    }}>
    <AppNavbar />
    <div className= "mainCard">
      <Hobbies />
      <Personality />
      <Education />
    </div>
    </div>
  );
}
export default About;
