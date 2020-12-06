import React from "react";
import skills from "../data/skills";
import SkillItem from "./skillItem";
import "../styles/skills.css";
import SessionTitle from "./sessionTitle";

function Skills() {
  return (
    <div className="skills-container">
      <SessionTitle title={"Skills"} color={"--color-5"}/>
      <div className="skills-box">
        {skills.map((skill, index) => (
          <SkillItem data={skill} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Skills;
