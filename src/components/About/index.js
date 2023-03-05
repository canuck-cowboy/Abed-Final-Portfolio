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
              I'm Abed. I am much influenced by Artificial Intelligence and
              Automation. I specialize in microcontroller programming, and have
              knowledge in website development and mobile applications design
            </p>
            <p>
              I developed numerous Microcontroller applications using different
              Microcontroller boards such as Arduino Uno R3, Arduino Nano,
              Teensy 4.0, Arduino Pro Mini 328, MSP-EXP430FR4133, STM32F103C8T6
              Blue Pill and Curiosity Nano.
            </p>
            <p>
              I'm also a known as Iron Man. Magic is science that you can't
              understand
            </p>
            <p>In love with Programming.</p>
            <p>
              If I need to define myself in one word that would be Ironman!!!
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
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
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
