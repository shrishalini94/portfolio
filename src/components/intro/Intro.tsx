import React from "react";
import "./intro.scss";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Toggle from '../toggle/Toggle' ;



const Intro: React.FC = () => {
  return (
    <div className="intro" id="intro">
      <div className="togglebutton"><Toggle/></div>
      <div className="left">
        <div>
          <img src="assets/p1.png" alt=' '  className="imgContainer"/>
        </div>
        <h2>Shri Shalini</h2>
        <p>I'm a Front-End Developer</p>
        <div className='iconcontainer' >
      <div className="icons"> <InstagramIcon/>  </div> 
      <div className="icons"> <FacebookIcon/></div> 

      <div className="icons"> <TwitterIcon/>   </div> 

       </div> 

       <button>Hire Me</button> 
      </div>
     
    </div>
  );
};

export default Intro;
