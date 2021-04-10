import React from "react";
import timelineData from "../data/careerData";
import TimelineItem from "./timelineItem";
import "../styles/timeline.css";
import SessionTitle from "./sessionTitle";

function Timeline() {
  return (
    <div className="timeline">
      <SessionTitle title={"Academic and professional experiences."} color={"--color-14"}/>
      <div className="timeline-container">
        {timelineData.map((careerData, index) => (
          <TimelineItem data={careerData} index={index} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Timeline;
