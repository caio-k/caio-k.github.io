import React from "react";
import "../styles/timeline-item.css";

const TimelineItem = ({data, index}) => (
  <div className={index % 2 === 0 ? "timeline-box left" : "timeline-box right"}>
    <div className={"timeline-content"}>
      <span>{data.institution} - {data.title}</span>

      <div>
        <span>From {data.begin} to {data.end}</span>
      </div>

      {data.description.map((descriptionItem, index) => <p key={index}>{descriptionItem}</p>)}
    </div>
  </div>
);

export default TimelineItem;
