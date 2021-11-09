import React from "react";
// Some CSS for stars effect from Alin Georgian Antoci
// https://github.com/WebDevSHORTS/Parallax-Star-Background/blob/master/style.css
import "./about.css";

const AboutMe = () => {
  return (
    <div id="About" className="container-fluid p-0 m-0">
      <section>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div id="title">
          <div className="box" style={{ fontFamily: "Raleway", zIndex: "1" }}>
            <span />
            <span />
            <span />
            <span />
            Hello, I'm <span className="highlight">Neil Tellez</span>
            <br />
            {/* Word changes */}
            <div className="span-container">
              <br/>
              I have experience in
              <div className="span-wrap">
                <div className="word-wrap">
                  <span className="words highlight">AI/DL Research</span>
                  <span className="words highlight">Data Visualization</span>
                  <span className="words highlight">Web Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="links">
          <a
            id="one"
            href="https://github.com/Neveon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x" />
          </a>

          <a
            id="two"
            href="https://www.freecodecamp.org/nat711"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-free-code-camp fa-2x" />
          </a>

          <a
            id="three"
            href="https://codepen.io/neveon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-codepen fa-2x" />
          </a>
          <a href="#contact">
            <i className="far fa-envelope fa-2x" />
          </a>
        </div>
        <div className="button">
          <a href="#projects">
            <button className="btn btn-dark">My Projects</button>
          </a>
          <a href="#contact">
            <button className="btn btn-dark">Contact Me</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
