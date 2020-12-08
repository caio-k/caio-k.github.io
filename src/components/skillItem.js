import React from "react";
import "../styles/skill-item.css";

const SkillItem = ({img, text}) => (
  <div className="skill-content">
    <img src={img} alt={text} width={55} height={55}/>
    <br/>
    <span>{text}</span>
  </div>
)

export default SkillItem;
