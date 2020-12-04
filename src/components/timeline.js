import React from "react";
import timelineData from "../data/data";
import TimelineItem from "./timelineItem";
import "../styles/timeline.css";

function Timeline() {
  return (
    <div>
      <div className="timeline-title"><span>my career</span></div>
      <div className="timeline-container">
        {timelineData.map((data, index) => (
          <TimelineItem data={data} index={index} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Timeline;
