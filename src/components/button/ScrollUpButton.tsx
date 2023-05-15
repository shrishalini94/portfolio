
import React, { useState } from "react";
import './butoon.scss';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  /*const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    setIsVisible(scrollTop > windowHeight);
  };*/

 

  React.useEffect(() => {
    window.addEventListener("scroll",() => {
      if(window.scrollY>100)
      {
        setIsVisible(true);
      }
      else{
        setIsVisible(false);
      }
      });
    },[])

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    

    

  return (
    <>
      {isVisible && (
        <button className="scroll-up-button" onClick={handleClick}>
          Scroll to top
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;
