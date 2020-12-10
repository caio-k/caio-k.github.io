import React from "react";
import "../styles/timeline-item.css";

const TimelineItem = ({data, index}) => (
  <div className={index % 2 === 0 ? "timeline-box left" : "timeline-box right"}>
    <div className={index % 2 === 0 ? "timeline-content left-content" : "timeline-content right-content"}>
      <span>{data.institution} - {data.title}</span>

      <div>
        <span>From {data.begin} to {data.end}</span>
      </div>

      <p>{data.description}</p>

      {data.mainTechnologies && (
        <p>{data.mainTechnologies}</p>
      )}
    </div>
  </div>
);

export default TimelineItem;
