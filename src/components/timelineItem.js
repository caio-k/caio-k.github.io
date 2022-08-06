import React from "react";
import "../styles/timeline-item.css";

const TimelineItem = ({data, index}) => (
  <div className={index % 2 === 0 ? "timeline-box left" : "timeline-box right"}>
    <div className={"timeline-content"}>
      <span>{data.institution}</span>

      <div>
        {data.positions.map((position, index) => {
          return (
            <>
              <span className={"timeline-role-content"}>{position.role} - From {position.begin} to {position.end}</span>
              {position.description.map((descriptionItem, index) => <p key={index}>{descriptionItem}</p>)}
            </>
          )
        })}
      </div>
    </div>
  </div>
);

export default TimelineItem;
