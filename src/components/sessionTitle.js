import React from "react";
import "../styles/utils.css";

function SessionTitle(props) {
  const color = getComputedStyle(document.body).getPropertyValue(props.color);

  return (
    <div className="session-title" style={{borderBottomColor: color}}>
      <span style={{color: color}}>{props.title}</span>
    </div>
  )
}

export default SessionTitle;
