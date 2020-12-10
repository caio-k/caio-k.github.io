import React from "react";
import SessionTitle from "./sessionTitle";
import "../styles/contacts.css";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import resumeIcon from "../assets/relatorio.svg";
import copyIcon from "../assets/copy.svg";

function Contacts() {
  return (
    <div className="contacts-container">
      <SessionTitle title={"Contacts"} color={"--color-5"}/>
      <h4>Lets get in touch</h4>
      <div className="contacts-content">

        <a href="https://www.linkedin.com/in/caio-nakazawa-476b94169">
          <img src={linkedinIcon} alt={"LinkedIn"}/>
          <br/>
          <span>LinkedIn</span>
        </a>

        <a href="https://github.com/caio-k">
          <img src={githubIcon} alt={"GitHub"}/>
          <br/>
          <span>GitHub</span>
        </a>

        <a href="cv-caio-koiti-nakazawa.pdf">
          <img src={resumeIcon} alt={"Resume"}/>
          <br/>
          <span>Resume</span>
        </a>
      </div>
      <div className="email-session">
        <h4>
          Email: <input id="email" value="caionakazawa@usp.br" readOnly={true}/>
        </h4>
        <img src={copyIcon} alt="Copy" width={20} height={20} onClick={() => copyEmail()}/>
      </div>
      <div className="tooltip">Copied!</div>
    </div>
  )
}

function copyEmail() {
  const email = document.querySelector("#email");
  const tooltip = document.querySelector(".tooltip");
  email.select();
  document.execCommand("copy");
  tooltip.classList.add("show");
  setTimeout(function () {
    tooltip.classList.remove("show");
  }, 1000);
}

export default Contacts;
