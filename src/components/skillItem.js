import React from "react";
import "../styles/skill-item.css";

const SkillItem = ({data}) => (
  <div style={{background: data.backgroundColor}} className="skill-content">
    <span style={{color: "#FFF"}}>
    {data.skill}
    </span>
  </div>
)

export default SkillItem;
