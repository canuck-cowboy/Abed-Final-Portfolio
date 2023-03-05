import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Sidebar from "../Sidebar";
import "./index.scss";
import WordCloud from "./wordcloud";
import StarfieldAnimation from "react-starfield-animation";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const skillsArray = "Skills".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const CloudItem = () => {
    const options = {
      radius: 250,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    };
    return (
      <TagCloud options={options}>
        {[
          "Arduino",
          "Java",
          "C++",
          "Embedded C",
          "C#",
          "React",
          "MySQL",
          ".Net",
          "Android",
          "RTOS",
          "IoT",
          "AI",
          "Circuit Design",
          "PCBs",
          "Sensors",
          "TinyML",
          "AWS",
          "Embedded Linux",
          "DevOps",
          "LiquidCrystal",
          "RTC",
          "Proteus",
        ]}
      </TagCloud>
    );
  };

  return (
    <div className="skills-main">
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
      <div className="skills-container">
        <span className="tags-top">&lt;body&gt;</span>
        <div className="content-div">
          <div className="text-content">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={skillsArray}
                idx={15}
              />
              <br />
            </h1>
            <p>
              I am an excellent computer engineer and technician capable of
              fixing almost any, if not all computers. I am far more than a
              Computer engineering prodigy who graduated from Algoma University
              with honors. With an intelligence classified as super-genius, I am
              easily one of the smartest people on Earth.
            </p>
            <p>
              My genius allows me to act as a futurist. I am a person capable of
              intuiting the future based on current trends, to the point of
              foreshadowing that a situation like COVID-19 was going to happen
              years before it did. My ability also extends to a much smaller
              scale. It's really hard for human interactions to surprise me and
              sometimes I finish other people's sentences.
            </p>
          </div>
          <div className="tagcloud-wrap-mobile">
            <CloudItem />
          </div>
          <div className="pc-tagcloud">
            <WordCloud />
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

export default Skills;
