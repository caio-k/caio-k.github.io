import React from "react";
import SkillItem from "./skillItem";
import SessionTitle from "./sessionTitle";
import angularIcon from "../assets/skillsIcon/angular.svg";
import cIcon from "../assets/skillsIcon/c.svg";
import cssIcon from "../assets/skillsIcon/css.svg";
import gitIcon from "../assets/skillsIcon/git.svg";
import htmlIcon from "../assets/skillsIcon/html.svg";
import javaIcon from "../assets/skillsIcon/java.svg";
import jsIcon from "../assets/skillsIcon/js.svg";
import reactJsIcon from "../assets/skillsIcon/react.svg";
import springIoIcon from "../assets/skillsIcon/springio.svg";
import sqlIcon from "../assets/skillsIcon/sql.svg";
import "../styles/skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <SessionTitle title={"Skills"} color={"--color-6"}/>

      <div className="skills">
        <p>I have professional experience in:</p>

        <div className="skill-box">
          <SkillItem img={javaIcon} text={"Java"}/>
          <SkillItem img={angularIcon} text={"AngularJS"}/>
          <SkillItem img={gitIcon} text={"Git"}/>
          <SkillItem img={sqlIcon} text={"SQL"}/>
        </div>

        <p>I also had contact with other technologies during my college years and in my personal projects:</p>
        <div className="skill-box">
          <SkillItem img={htmlIcon} text={"HTML"}/>
          <SkillItem img={cssIcon} text={"CSS"}/>
          <SkillItem img={jsIcon} text={"Javascript"}/>
          <SkillItem img={reactJsIcon} text={"ReactJS"}/>
          <SkillItem img={springIoIcon} text={"Spring Boot"}/>
          <SkillItem img={cIcon} text={"C"}/>
        </div>
      </div>
    </div>
  )
}

export default Skills;
