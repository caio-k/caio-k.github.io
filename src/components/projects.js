import React from "react";
import SessionTitle from "./sessionTitle";
import sortingVisualizerGIF from "../assets/sorting-visualizer.gif";
import safeSchoolGIF from "../assets/safe-school.gif";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects-session">
      <SessionTitle title={"Projects"} color={"--color-5"}/>

      <p>Below are some projects I participated in. You can see my other projects on my <a
        href="https://github.com/caio-k">Github</a>.</p>

      <div className="projects">

        <div className="project">
          <div className="project-description">
            <h3>Sorting Visualizer</h3>
            <p>This is a visualization tool for sorting algorithms. I used AngularJS in this project, and you can access
              it <a href="https://caio-k.github.io/sorting-visualizer/#!/">here</a>.</p>
          </div>

          <div className="project-gif">
            <img src={sortingVisualizerGIF} alt={"Sorting Visualizer GIF"}/>
          </div>
        </div>

        <div className="project">
          <div className="project-description">
            <h3>SafeSchool</h3>
            <p>SafeSchool is a tool to help schools in Covid-19's epoch. It aims to control the flow of students within
              a school to avoid crowds. I used ReactJS on the frontend and Spring Boot (Java) on the backend. You can
              access it <a href="https://safe-school-app.herokuapp.com/">here</a>.</p>
          </div>

          <div className="project-gif">
            <img src={safeSchoolGIF} alt={"Safe School GIF"}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects;
