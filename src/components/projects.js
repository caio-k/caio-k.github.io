import React from "react";
import SessionTitle from "./sessionTitle";
import ideaIcon from "../assets/idea.svg";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects-session">
      <SessionTitle title={"Projects"} color={"--color-5"}/>

      <div className="projects-box">
        <div className="project">
          <h3>Sorting Visualizer</h3>
          <div className="project-description">
            <p>This is a visualization tool for sorting algorithms. I used AngularJS in this project.</p>
          </div>
          <div className="project-links">
            <a href="https://github.com/caio-k/sorting-visualizer">Code</a>
            <a href="https://caio-k.github.io/sorting-visualizer/#!/">Application</a>
          </div>
        </div>

        <div className="project">
          <h3>SafeSchool</h3>
          <div className="project-description">
            <p>SafeSchool is a tool to help schools in Covid-19's epoch. It aims to control the flow of students within
              a school to avoid crowds. I used ReactJS on the front-end and Spring Boot (Java) on the back-end.</p>
          </div>
          <div className="project-links">
            <a href="https://github.com/caio-k/rp2-project-webapp">Frontend</a>
            <a href="https://github.com/caio-k/rp2-project-server">Backend</a>
            <a href="https://safe-school-app.herokuapp.com/">Application</a>
          </div>
        </div>

        <div className="project">
          <h3>Other Projects</h3>
          <div className="project-description">
            <p>You can see my other projects on my GitHub.</p>

            <div className="wrapper">
              <div className="box-area">
                <div className="box box-front"><img src={ideaIcon} alt="" width={80} height={80}/></div>
                <div className="box box-right"/>
                <div className="box box-back"/>
                <div className="box box-left"/>
                <div className="box box-top"/>
                <div className="box box-bottom"/>
              </div>
            </div>
          </div>
          <div className="project-links">
            <a href="https://github.com/caio-k">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
