import React from "react";
import "./footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ScrollUpButton from "../button/ScrollUpButton";
const Foooter: React.FC = () => {
  return (
    <div className="foot">
      <div className="footer">
        <div className="icons">
          {" "}
          <InstagramIcon />{" "}
        </div>
        <div className="icons">
          {" "}
          <FacebookIcon />
        </div>

        <div className="icons">
          {" "}
          <TwitterIcon />{" "}
        </div>
      </div>

      <div className="links">
        <a href="#intro" className="navbar">
          Home
        </a>
        <a href="#portfolio" className="navbar">
          Portfolio
        </a>
        <a href="#features" className="navbar">
          Features
        </a>

        <a href="#contact" className="navbar">
          Contact
        </a>
      </div>
      <ScrollUpButton />
    </div>
  );
};

export default Foooter;
