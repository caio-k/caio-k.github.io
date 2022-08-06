import React from "react";
import SessionTitle from "./sessionTitle";
import OwlCarousel from "react-owl-carousel";
import ideaIcon from "../assets/idea.svg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../styles/projects.css";

function Projects() {
  const responsive = {
    0: {
      items: 1
    },
    660: {
      items: 2
    },
    990: {
      items: 3
    }
  }

  return (
    <div className="projects-session">
      <SessionTitle title={"Some projects that helped me develop my skills."} color={"--color-5"}/>

      <div className="projects-carousel">
        <OwlCarousel className={"owl-theme"} items={3} dots={false} responsive={responsive} nav
                     navText={['&#8592;', '&#8594;']} navClass={['projects-carousel-nav', 'projects-carousel-nav']}>

          <div className="project">
            <div className="project-symbol"><span>1</span></div>
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
            <div className="project-symbol"><span>2</span></div>
            <h5>Tradutor Braille</h5>
            <div className="project-description">
              <p> Tradutor Braille is a simple and free resource to convert texts to braille. I used NextJS on the front-end and hosted the application on Vercel.</p>
            </div>
            <div className="project-links">
              <a href="https://www.tradutorbraille.com.br/">Application</a>
            </div>
          </div>

          <div className="project">
            <div className="project-symbol"><span>3</span></div>
            <h5>Safe School</h5>
            <div className="project-description">
              <p>Safe School is a college project. It's a tool to help schools in Covid-19's epoch. It aims to control
                the flow of students within a school to avoid crowds. We used ReactJS on the front-end and Spring Boot
                (Java) on the back-end, and hosted the application on Heroku.</p>
            </div>
            <div className="project-links">
              <a href="https://github.com/caio-k/rp2-project-webapp">Frontend</a>
              <a href="https://github.com/caio-k/rp2-project-server">Backend</a>
              <a href="https://safe-school-app.herokuapp.com/">Application</a>
            </div>
          </div>

          <div className="project">
            <div className="project-symbol"><span>4</span></div>
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
        </OwlCarousel>
      </div>
    </div>
  )
}

export default Projects;
