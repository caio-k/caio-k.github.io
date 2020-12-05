import React from "react";
import skills from "../data/skills";
import SkillItem from "./skillItem";
import "../styles/skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <div className="skill-title"><span>skills</span></div>
      <div className="skills-box">
        {skills.map((skill, index) => (
          <SkillItem data={skill} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Skills;
