import React from "react";
import "./intro.scss";


const Intro: React.FC = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div>
          <img src="assets/p1.png" alt=' '  className="imgContainer"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Shri Shalini</h1>
          <h3>UI/UX Developer</h3>
          <p>
          I am shrishalini ui/ux developer from chennai. I have experience in designing and building websites as well as applications        </p>
          <a href ="shalini.docx" download className="button">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
