import React from 'react';
import "./features.scss";
const data= [
{
  id: 1,
  title: "HTML",
  description: "HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content."
},
{
  id: 2,
  title: " CSS",
  description: "CSS stands for Cascading Style Sheets · CSS describes how HTML elements are to be displayed on screen, paper, or in other media "
},
{
  id: 3,
  title: "FIGMA",
  description: "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows."
},
{
  id: 4,
  title: "REACT JS",
  description: "React. js is a free, open-source JavaScript library. It works best to build user interfaces by combining sections of code (components) into full websites."
},
{
  id: 5,
  title: "ANGULAR",
  description: "Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications."
},
{
  id: 6,
  title: "JAVASCRIPT",
  description: "JavaScript is a lightweight, just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages"
}
]

const Features: React.FC=()=>
{
  return (
    <section className='features' id="features">
      <h2 className='sectiontitle' >Features</h2>
      <div className='sectioncontainer'>
        {
          data.map(({ id, title , description }) => {
            return(
              <div className='card' key={id}>
                <h3 className='title'>{title}</h3>
                <p className='description'>{description}</p>
                </div>
            )
          }
            )
          }</div>
        </section>
      
    
    
  )
}

export default Features;