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
          <div className="project-symbol"><span>1</span></div>
          <h5>Sorting Visualizer</h5>
          <div className="project-description">
            <p>This is a visualization tool for sorting algorithms. I used AngularJS in this project and hosted the
              application on GitHub Pages.</p>
          </div>
          <div className="project-links">
            <a href="https://github.com/caio-k/sorting-visualizer">Code</a>
            <a href="https://caio-k.github.io/sorting-visualizer/#!/">Application</a>
          </div>
        </div>

        <div className="project">
          <div className="project-symbol"><span>2</span></div>
          <h5>Safe School</h5>
          <div className="project-description">
            <p>Safe School is a tool to help schools in Covid-19's epoch. It aims to control the flow of students within
              a school to avoid crowds. I used ReactJS on the front-end and Spring Boot (Java) on the back-end, and
              hosted
              the application on Heroku.</p>
          </div>
          <div className="project-links">
            <a href="https://github.com/caio-k/rp2-project-webapp">Frontend</a>
            <a href="https://github.com/caio-k/rp2-project-server">Backend</a>
            <a href="https://safe-school-app.herokuapp.com/">Application</a>
          </div>
        </div>

        <div className="project">
          <div className="project-symbol"><span>3</span></div>
          <h5>Monthly Expenses</h5>
          <div className="project-description">
            <p>Monthly Expenses is a tool for managing personal expenses. I used ReactJS on the front-end and Spring
              Boot (Java) on the back-end, and hosted the application on Heroku.</p>
          </div>
          <div className="project-links">
            <a href="https://github.com/caio-k/monthly-expenses-webapp">Frontend</a>
            <a href="https://github.com/caio-k/monthly-expenses-server">Backend</a>
            <a href="https://monthly-expenses-app.herokuapp.com/">Application</a>
          </div>
        </div>

        <div className="project">
          <h5>Other Projects</h5>
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
