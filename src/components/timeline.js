import React from "react";
import timelineData from "../data/careerData";
import TimelineItem from "./timelineItem";
import "../styles/timeline.css";
import "../styles/utils.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className="session-title timeline-title"><span>Career</span></div>
      <div className="timeline-container">
        {timelineData.map((careerData, index) => (
          <TimelineItem data={careerData} index={index} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Timeline;
