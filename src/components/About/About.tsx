import React from 'react';
import './about.scss';
import ShriShalini2023 from './shalini/ShriShalini2023.pdf';


function About() {
  return (
    <div className='about' id='about'>
        <div className="wrapper">
        <div className="left">
            <h2>About Me</h2>
            <img src='/assets/p1.png' alt='' className='imagecontainer' ></img>
        </div>

        <div className="right">
            <div className="rightcontainer">
            <h2>Hi There, I'm</h2>
            <h1>Shri Shalini</h1>
            <h3>UI/UX Developer</h3>
            <p>
            I am shrishalini ui/ux developer from chennai. I have experience in designing and building websites as well as applications        </p>
            <a href ={ShriShalini2023}  download className="button">Download Resume</a>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About
