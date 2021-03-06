import React from "react";
import "../styles/header.css";
import photo from "../assets/photo.jpeg";

function Header() {
  return (
    <header>
      <div className="header-first-part">
        <h1>Hello, my name is <span>Caio</span>!</h1>
        <p>I like to solve problems, especially when I help other people with my solution. I'm always trying to learn
          during the process, just as I'm always open to new challenges and ready to face changes.</p>
      </div>
      <div className="header-second-part">
        <div className="header-info-box">
          <div className="header-profile-title">
            Profile
          </div>
          <div className="header-profile-content">
            <div className="header-profile-img">
              <img src={photo} alt={"Me"} width="200" height="200"/>
            </div>
            <div className="header-profile-info">
              <div>
                <span className="object-type">SWEngineer </span>
                <span className="object-name">me </span>
                <span>= </span>
                <span className="reserved">new </span>
                <span className="object-type">Caio</span>
                <span>();</span>
              </div>
              <br/>
              <div>
                <span className="object-name">me</span>
                <span>.</span>
                <span className="attribute">age </span>
                <span>= 20;</span>
              </div>
              <div>
                <span className="object-name">me</span>
                <span>.</span>
                <span className="attribute">location </span>
                <span>= "Sao Paulo";</span>
              </div>
              <br/>
              <div>
                <span className="object-name">me</span>
                <span>.</span>
                <span className="attribute">introduceMyself</span>
                <span>();</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
