/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  faJsSquare,
  faReact,
  faAndroid,
  faRaspberryPi,
  faJava,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import Sidebar from "../Sidebar";
import StarfieldAnimation from "react-starfield-animation";

const About = () => {
  const aboutArray = "About Me".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-main">
      <Sidebar />
      <StarfieldAnimation
        numParticles={500}
        lineWidth={2.0}
        depth={800}
        alphaFactor={0.6}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="about-container">
        <span className="tags-top">&lt;body&gt;</span>
        <div className="content-div">
          <div className="text-content">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={aboutArray}
                idx={15}
              />
            </h1>
            <p>
              Hello, world. I'm the LogicTinkerer, and today, I'm going to change it:
            </p>
            <p>
              I'm a passionate Computer Scientist who has devised sophisticated programs,
              such as an AI chatbot, an AI Voice Assistant, a real time  chat application, as well a Virtual Private Network. 
            </p>
            <p>
              I am also a master of Embedded Systems Development. I've developed a remote-controlled Quadcopter Drone,
              a smart hat for COVID-19, and various IoT gadgets.
            </p>
            <p>
              Everything is achievable through Technology . . .</p>
            <p>
              Science isn't about why, it's about why not?
            </p>
          </div>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faJava} color="#4B8BBE" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faLinux} color="#333333" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faAndroid} color="#3DDC84" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <img src="adr.png" alt="arduino" style={{ height: "100px" }} />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faRaspberryPi} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
        <span>
          <span className="tags-top body-tag">&lt;/body&gt;</span>
          <br />
          <span className="tags-bottom html-tag">&lt;/html&gt;</span>
        </span>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default About;
