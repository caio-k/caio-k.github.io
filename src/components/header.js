import React from "react";
import "../styles/header.css";
import photo from "../assets/photo.jpeg";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="first-column-header">
          <h1>Hello, My Name is <span>Caio</span></h1>
          <h2>I like to solve problems, especially when I help other people with my solution. I'm always trying to learn
            during the process, as well as always open to new challenges and ready to face changes.</h2>
        </div>
        <div className="second-column-header">
          <img src={photo} alt={"Me"} width="300" height="300"/>
        </div>
      </div>
      <div className="waves">
        <div className="wave wave1"/>
        <div className="wave wave2"/>
        <div className="wave wave3"/>
        <div className="wave wave4"/>
      </div>
    </div>
  )
}

export default Header;
