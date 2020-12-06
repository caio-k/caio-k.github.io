import React from "react";
import SessionTitle from "./sessionTitle";
import "../styles/contacts.css";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import resumeIcon from "../assets/relatorio.svg";

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
      <h4>Email: caionakazawa@usp.br</h4>
    </div>
  )
}

export default Contacts;
