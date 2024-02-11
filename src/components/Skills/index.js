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
            'Arduino',
            'Java',
            'Python',
            'OpenCV',
            'Wireshark',
            'SQL', 
            'Pandas',
            'NumPy',
            'CLI',
            'Matplotlib',
            'C#',
            'C++',
            'AD',
            'Keras',
            'Django',
            'Scikit-Learn',
            'TensorFlow'
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
              Knowledge is power, and I plan on becoming the most powerful man in the world. I never 
              stop learning. It's what keeps me sharp. The moment you stop learning is the moment you 
              become irrelevant. I learn by doing. The only way to truly master a skill is to practice it.
            </p>
            <p>
              I have a lot of skills. And you know what? Most of them are useful. I can 
              build anything you need, and I'm not just talking about Programs. I'm always learning. 
              It's the only way to stay ahead of the curve. I can learn anything you can teach me. 
              And I can teach you a lot. Now, take a look at what I've I have mastered
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
