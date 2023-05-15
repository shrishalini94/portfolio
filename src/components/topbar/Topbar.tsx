import React, { useState } from "react";
import "./topbar.scss";
import {
  LibraryBooksOutlined,
  Close,
  Menu,
  HomeOutlined,
  PersonOutlined,
  WorkOutlineOutlined,
  SchoolOutlined,
  MessageOutlined,
} from "@mui/icons-material";
const Topbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            gine.
          </a>
        </div>
        <div
          className={isMobile ? "responsivecenter" : "center"}
          onClick={() => setIsMobile(false)}
        >
          <ul className="list">
            <div className="navbar">
              <li>
                <a href="#intro">
                  <HomeOutlined />
                </a>
              </li>
            </div>

            <div className="navbar">
              <li>
                <a href="#about">
                  <PersonOutlined />
                </a>
              </li>
            </div>

            <div className="navbar">
              <li>
                <a href="#portfolio">
                  <WorkOutlineOutlined />
                </a>
              </li>
            </div>

            <div className="navbar">
              <li>
                <a href="#recentwork">
                  <LibraryBooksOutlined />
                </a>
              </li>
            </div>

            <div className="navbar">
              <li>
                <a href="#features">
                  <SchoolOutlined />
                </a>
              </li>
            </div>

            <div className="navbar">
              <a href="#contact">
                <MessageOutlined />
              </a>
            </div>
          </ul>
        </div>

        <button className="mobilemenu" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <Close /> : <Menu />}
        </button>
      </div>
    </div>
  );
};

export default Topbar;
